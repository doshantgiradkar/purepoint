export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - PurePoint</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #10B981, #059669); padding: 20px; text-align: center;">
    <img src="https://purepoint.app/logo.png" alt="PurePoint Logo" style="height: 40px;">
    <h1 style="color: white; margin: 10px 0 0 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Welcome to PurePoint! To start reporting garbage issues and contributing to cleaner communities, please verify your email address.</p>
    <p>Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #10B981;">{verificationCode}</span>
    </div>
    <p>Enter this code in the verification page to activate your account and join our mission for cleaner cities.</p>
    <p style="color: #EF4444;">This code expires in 15 minutes.</p>
    <p>If you didn't create a PurePoint account, please ignore this email.</p>
    <p>Together for cleaner cities,<br>The PurePoint Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message - please do not reply</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to PurePoint</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #10B981, #059669); padding: 20px; text-align: center;">
    <img src="https://purepoint.app/logo.png" alt="PurePoint Logo" style="height: 40px;">
    <h1 style="color: white; margin: 10px 0 0 0;">Welcome to PurePoint!</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello {name},</p>
    <p>Thank you for joining PurePoint - your new tool for creating cleaner, healthier communities!</p>
    <p>With PurePoint, you can:</p>
    <ul style="padding-left: 20px;">
      <li>📸 Report garbage issues with photo evidence</li>
      <li>📍 Track complaint status in real-time</li>
      <li>🏆 Earn reward points for valid reports</li>
      <li>⭐ Rate authorities' response quality</li>
    </ul>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{dashboardURL}" style="background-color: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
        Report Your First Issue
      </a>
    </div>
    <p>Your participation helps make our cities cleaner and holds authorities accountable. Every report matters!</p>
    <p>Need help? Visit our <a href="{helpCenterURL}" style="color: #10B981;">Support Center</a></p>
    <p>Clean cities start with you,<br>The PurePoint Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message - please do not reply</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - PurePoint</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #10B981, #059669); padding: 20px; text-align: center;">
    <img src="https://purepoint.app/logo.png" alt="PurePoint Logo" style="height: 40px;">
    <h1 style="color: white; margin: 10px 0 0 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your PurePoint password. If this wasn't you, please ignore this email.</p>
    <p>To reset your password, click below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
        Reset Password
      </a>
    </div>
    <p style="color: #EF4444;">This link expires in 1 hour.</p>
    <p>For security tips:<br>
    ➤ Use a unique password<br>
    ➤ Enable 2FA in your account settings<br>
    ➤ Never share your credentials</p>
    <p>Stay vigilant,<br>The PurePoint Security Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message - please do not reply</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Updated - PurePoint</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #10B981, #059669); padding: 20px; text-align: center;">
    <img src="https://purepoint.app/logo.png" alt="PurePoint Logo" style="height: 40px;">
    <h1 style="color: white; margin: 10px 0 0 0;">Password Updated</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello {name},</p>
    <p>Your PurePoint password has been successfully updated!</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #10B981; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>Security recommendations:</p>
    <ul style="padding-left: 20px;">
      <li>🔒 Enable two-factor authentication</li>
      <li>📱 Use a password manager</li>
      <li>🚨 Review recent login activity</li>
    </ul>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{loginURL}" style="background-color: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
        Continue to Dashboard
      </a>
    </div>
    <p>Your account security helps protect our community's cleanliness efforts.</p>
    <p>In solidarity for cleaner cities,<br>The PurePoint Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message - please do not reply</p>
  </div>
</body>
</html>
`;