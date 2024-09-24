const express = require('express');
const twilio = require('twilio');

const twilioClient = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const router = express.Router();

const otps = {};

// Generate and send OTP
router.post('/send-otp', async (req, res) => {
    console.log('Recieved request:', req.body)
    const { contactNumber } = req.body;

    if (!contactNumber || !/^\d{10}$/.test(contactNumber)) {
        return res.status(400).send('Invalid contact number');
    }
    console.log("No. validated successfully")

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(otp)
    try {
        console.log('Sending OTP to:', contactNumber)
        await twilioClient.messages.create({
            body: `Your OTP is ${otp}`,
            from: twilioPhoneNumber,
            to: `+91${contactNumber}`,
        });

        otps[contactNumber] = otp;
        console.log("OTP sent")

        res.send('OTP sent successfully');
    } catch (error) {
        console.error('Error sending OTP:');
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        res.status(500).send('Failed to send OTP');
    }
});

// Verify OTP
router.post('/verify-otp', (req, res) => {
    const { contactNumber, otp } = req.body;

    if (!contactNumber || !otp || !/^\d{10}$/.test(contactNumber)) {
        return res.status(400).send('Invalid contact number or OTP');
    }

    if (otps[contactNumber]) {
        if (otps[contactNumber] === otp) {
            // If OTP matches proceed with Login/Registration
            delete otps[contactNumber]; // Remove OTP after successful verification
            res.status(200).send('OTP verified successfully');
            const usersRef = db.ref(User.collection());
            
        } else {
            res.status(400).send('Invalid OTP');
        }
    } else {
        res.status(400).send('OTP expired or not found. Please request a new OTP.');
    }
});

module.exports = router;
