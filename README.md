# Portfolio Website

A modern, responsive portfolio website built with Flask showcasing professional experience, technical skills, and projects.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content**: Work experience loaded from CSV for easy updates
- **Multiple Sections**:
  - Home - Hero section with animated typing effect
  - About - Comprehensive background and expertise
  - Work Experience - Timeline view of professional journey
  - **Projects** - Showcase of technical projects organized by category
  - Technologies - Showcase of technical skills with proficiency levels
  - Contact - Contact form and information
- **Downloadable Resume**: PDF resume download functionality
- **Interactive Elements**: Smooth scrolling, animated counters, and scroll-based animations

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. **Clone or download this repository**

2. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

3. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   ```

4. **Activate the virtual environment**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

5. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

6. **Place your resume** (optional)
   - Add your `resume.pdf` file to the `static/` folder
   - If you don't have one, the download button will show an appropriate message

7. **Run the application**
   ```bash
   python app.py
   ```

8. **Open your browser**
   - Navigate to: `http://localhost:5000`

## 📁 Project Structure

```
portfolio/
│
├── app.py                      # Main Flask application
├── requirements.txt            # Python dependencies
├── README.md                   # Project documentation
│
├── data/
│   └── work_experience.csv     # Work experience data
│   └── projects.csv            # Projects and technical work data
│
├── static/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   ├── images/                # Image assets (optional)
│   └── resume.pdf             # Your resume PDF (add this)
│
└── templates/
    ├── base.html              # Base template
    ├── index.html             # Home page
    ├── about.html             # About page
    ├── experience.html        # Work experience page
    ├── projects.html          # Projects showcase page
    ├── technologies.html      # Technologies page
    └── contact.html           # Contact page
```

## 📝 Customization Guide

### Update Work Experience

Edit `data/work_experience.csv` with your own experience:

```csv
company,location,work_type,title,start_date,end_date,description,key_achievements
"Company Name","Location","Remote/Hybrid","Your Title","Start Date","End Date","Description","Achievement 1|Achievement 2|Achievement 3"
```

**Important**: Separate multiple achievements with the `|` character.

### Update Projects

Edit `data/projects.csv` with your own projects:

```csv
project_name,category,description,technologies,key_features
"Project Name","Category","Description","Tech1 • Tech2 • Tech3","Feature 1|Feature 2|Feature 3"
```

**Important**: 
- Separate technologies with the `•` character
- Separate key features with the `|` character
- Categories can be: "AI & Machine Learning", "Cloud Infrastructure & DevOps", "Backend Development", etc.

### Update Personal Information

1. **Contact Details** - Edit `templates/contact.html`:
   - Email address
   - Phone number
   - LinkedIn profile URL
   - GitHub profile URL

2. **About Section** - Edit `templates/about.html`:
   - Update the biography text
   - Modify expertise highlights
   - Adjust statistics and highlights

3. **Technologies** - Edit `templates/technologies.html`:
   - Add/remove technologies
   - Adjust skill proficiency levels
   - Modify categories

4. **Footer Links** - Edit `templates/base.html`:
   - Update social media links
   - Modify copyright information

### Customize Styling

Edit `static/css/style.css` to customize:
- Color scheme (modify CSS variables at the top)
- Fonts
- Layout
- Animations

### Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `static/` folder

## 🎨 Color Customization

To change the color scheme, edit the CSS variables in `static/css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Secondary accent */
    --accent-color: #10b981;       /* Success/highlight color */
    /* ... more colors */
}
```

## 🌐 Deployment

### Deploy to Production

For production deployment, consider these options:

1. **Heroku**
   ```bash
   # Create Procfile
   echo "web: python app.py" > Procfile
   
   # Deploy
   heroku create your-app-name
   git push heroku main
   ```

2. **PythonAnywhere**
   - Upload your files
   - Set up a virtual environment
   - Configure WSGI file

3. **AWS/GCP/Azure**
   - Use with Gunicorn/uWSGI
   - Set up reverse proxy with Nginx
   - Enable HTTPS

### Production Settings

Before deploying, update `app.py`:

```python
if __name__ == '__main__':
    # For development
    # app.run(debug=True, host='0.0.0.0', port=5000)
    
    # For production
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
```

## 📧 Contact Form

The contact form uses **FormSubmit.co** - a free service that sends form submissions directly to your email.

**⚠️ IMPORTANT - First Time Setup:**

FormSubmit requires **one-time email confirmation** before it works:

1. **Submit the contact form** (any test data is fine)
2. **Check your email** at akshayofficial5229@gmail.com
3. **Check SPAM folder** if you don't see it (common!)
4. **Click the confirmation link** in the email
5. **Done!** All future submissions will arrive automatically

📖 **Detailed instructions:** See [FORMSUBMIT_SETUP.md](FORMSUBMIT_SETUP.md) for complete setup guide and troubleshooting.

**After confirmation:**
- ✅ Users submit the form on your website
- ✅ You receive an email with their details
- ✅ Reply directly from the email
- ✅ 100% free, unlimited submissions

**Features:**
- ✅ **Zero configuration** after initial confirmation
- ✅ **Spam protection** built-in
- ✅ **Custom thank you page** on your website
- ✅ **No backend code** needed
- ✅ Includes sender's email for easy replies

**To change the email address:**
Edit the form action in `templates/contact.html`:
```html
<form action="https://formsubmit.co/YOUR-EMAIL@gmail.com" method="POST">
```

Then complete the confirmation process again with the new email.

## 🛠️ Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Akshay**
- Technical Lead at MoII AI
- 7+ years of experience in Python, AI, and Cloud Engineering

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Flask community for excellent documentation

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using Flask & Python**
