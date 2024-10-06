import { Drawer, message } from "antd";
import { useState } from "react";
import { StyledButton, StyledDiv, StyledInput, StyledText } from "../../styles/common-styles";
import OtpInput from "react-otp-input";
import { login } from "../../apis";

const LoginDrawer = (props: any) => {
    const { setIsFirstVisit, isBlur = false, reload = true } = props;
    const [otp, setOtp] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpScreen, setShowOtpScreen] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const handleNextBtn = async () => {
        if (phoneNumber.length !== 10) {
            message.error("Please Enter Valid Number");
            return;
        }
        try {
            setShowOtpScreen(true);
        } catch (error: any) {
            message.error(error?.response?.data || error?.message);
        }
    };

    const verifyOtpFunction = async (otpNumber: any) => {
        setOtp(otpNumber);
        if (otpNumber.length === 6) {
            try {
                await login();
                if (reload) window.location.reload();
            } catch (error: any) {
                message.error(error?.response?.data || error?.message);
            }
        }
    };

    const handleChangeText = () => {
        setShowOtpScreen(false);
    };

    const handlePhoneNumber = (event: any) => {
        setPhoneNumber(event.target.value);
    };

    const handleClose = () => {
        if (!isBlur) setShowModal(false);
        if (!isBlur) setIsFirstVisit(false);
    };

    return (
        <Drawer
            open={showModal}
            className="login-drawer"
            footer={null}
            placement="bottom"
            closable={isBlur ? false : true}
            onClose={handleClose}
            getContainer={false}
            height="auto"
            styles={{ content: { borderRadius: "20px 20px 0 0" } }}
            contentWrapperStyle={{ borderRadius: "20px 20px 0 0" }}
        >
            {showOtpScreen ? (
                <>
                    <StyledDiv>
                        <StyledText fs="15px" ta="left" mt="30px" c="#1150A3" fw="500" mb="10">
                            PLEASE ENTER THE VERIFICATION CODE
                        </StyledText>
                    </StyledDiv>
                    <OtpInput
                        value={otp}
                        inputType={"tel"}
                        onChange={verifyOtpFunction}
                        numInputs={6}
                        inputStyle={{
                            width: "50px",
                            height: "50px",
                            margin: "auto",
                            fontSize: "25px",
                            borderRadius: "4px",
                            border: "1px solid #1150A3"
                        }}
                        renderSeparator={<span></span>}
                        renderInput={(props: any) => <input {...props} />}
                    />
                    <StyledDiv>
                        <StyledText fs="15px" ta="left" mt="30px" fw="500" mb="10">
                            OTP has been sent to {phoneNumber.slice(0, -4) + "xxxxxx"}
                            <span style={{ color: "#1150A3" }} onClick={handleChangeText}>
                                {" "}
                                (change)
                            </span>
                        </StyledText>
                    </StyledDiv>
                </>
            ) : (
                <>
                    <StyledDiv>
                        <StyledText fs="14px" ta="left" mt="30px" c="#1150A3" fw="500" mb="10">
                            PHONE NUMBER
                        </StyledText>
                    </StyledDiv>

                    <StyledDiv>
                        <StyledInput
                            className="login-input"
                            b="1px solid #1150A3"
                            prefix={<span style={{ paddingRight: "10px" }}>+91 &nbsp; | </span>}
                            mb="20px"
                            type="text"
                            pattern="[0-9]*"
                            value={phoneNumber}
                            placeholder="9922xxxxxx"
                            onChange={handlePhoneNumber}
                            maxLength={10}
                            h="52px"
                        />
                    </StyledDiv>

                    <StyledButton
                        id="gst-next-button"
                        onClick={handleNextBtn}
                        mt="50px"
                        w="100%"
                        h="55px"
                        m="auto"
                        fs="17px"
                        fw="400"
                        b="1px solid #1150A3"
                        bgc="#1150A3"
                        c="#fff"
                    >
                        Next
                    </StyledButton>
                </>
            )}
        </Drawer>
    );
};

export default LoginDrawer;
