# Email Configuration for Contact Form

To enable email sending from the contact form, you need to configure email credentials.

## Option 1: Using Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password

3. **Set Environment Variables** before running the app:

   ```bash
   export MAIL_USERNAME="akshayofficial5229@gmail.com"
   export MAIL_PASSWORD="your-app-password-here"
   ```

   Or on Windows:
   ```cmd
   set MAIL_USERNAME=akshayofficial5229@gmail.com
   set MAIL_PASSWORD=your-app-password-here
   ```

4. **Run the application**:
   ```bash
   python app.py
   ```

## Option 2: Using .env File (Better for Development)

1. **Install python-dotenv**:
   ```bash
   pip install python-dotenv
   ```

2. **Create a `.env` file** in the project root:
   ```
   MAIL_USERNAME=akshayofficial5229@gmail.com
   MAIL_PASSWORD=your-app-password-here
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   ```

3. **Update app.py** to load environment variables:
   ```python
   from dotenv import load_dotenv
   load_dotenv()
   ```

4. **Add .env to .gitignore** (already done)

## Option 3: Using Other Email Services

### SendGrid
```bash
export MAIL_SERVER=smtp.sendgrid.net
export MAIL_PORT=587
export MAIL_USERNAME=apikey
export MAIL_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```bash
export MAIL_SERVER=smtp.mailgun.org
export MAIL_PORT=587
export MAIL_USERNAME=your-mailgun-username
export MAIL_PASSWORD=your-mailgun-password
```

## Testing the Contact Form

1. Install Flask-Mail:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up your email credentials (use one of the options above)

3. Run the application:
   ```bash
   python app.py
   ```

4. Visit http://localhost:5000/contact

5. Fill out the form and submit - you should receive an email!

## Important Notes

- **Never commit your email password** to version control
- **Use App Passwords** for Gmail, not your regular password
- **For production**, consider using environment variables or a secrets manager
- **Gmail has sending limits** (500 emails/day for free accounts)
- **For high volume**, use services like SendGrid, Mailgun, or AWS SES

## Troubleshooting

### "Authentication failed" error
- Make sure you're using an App Password, not your regular Gmail password
- Enable "Less secure app access" if not using 2FA (not recommended)

### "Connection refused" error
- Check that the MAIL_SERVER and MAIL_PORT are correct
- Ensure your firewall isn't blocking outgoing connections on port 587

### Emails not arriving
- Check your spam folder
- Verify the MAIL_USERNAME is set correctly
- Test with a simple Python script first to isolate the issue

## Quick Test Script

Create `test_email.py`:
```python
from flask import Flask
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')

mail = Mail(app)

with app.app_context():
    msg = Message('Test Email',
                  sender=os.environ.get('MAIL_USERNAME'),
                  recipients=[os.environ.get('MAIL_USERNAME')])
    msg.body = 'This is a test email from Flask-Mail!'
    mail.send(msg)
    print('Email sent successfully!')
```

Run: `python test_email.py`
