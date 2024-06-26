const sendToken = (user, statusCode, res) => {
    // create token
    const token = user.getJwtToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        // secure: true,
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token,
        user
    })
}

export default sendToken;