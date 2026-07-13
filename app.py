from flask import Flask, render_template, send_file
import csv
import os

app = Flask(__name__)

def read_work_experience():
    """Read work experience data from CSV file"""
    work_experience = []
    csv_path = os.path.join('data', 'work_experience.csv')
    
    if os.path.exists(csv_path):
        with open(csv_path, 'r', encoding='utf-8') as file:
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                work_experience.append(row)
    
    return work_experience

def read_projects():
    """Read projects data from CSV file"""
    projects = []
    csv_path = os.path.join('data', 'projects.csv')
    
    if os.path.exists(csv_path):
        with open(csv_path, 'r', encoding='utf-8') as file:
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                projects.append(row)
    
    return projects

@app.route('/')
def home():
    """Home page"""
    return render_template('index.html')

@app.route('/about')
def about():
    """About page"""
    return render_template('about.html')

@app.route('/experience')
def experience():
    """Work experience page"""
    work_data = read_work_experience()
    return render_template('experience.html', experiences=work_data)

@app.route('/projects')
def projects():
    """Projects page"""
    projects_data = read_projects()
    return render_template('projects.html', projects=projects_data)

@app.route('/technologies')
def technologies():
    """Technologies page"""
    return render_template('technologies.html')

@app.route('/contact')
def contact():
    """Contact page"""
    return render_template('contact.html')

@app.route('/thank-you')
def thank_you():
    """Thank you page after form submission"""
    return render_template('thank_you.html')

@app.route('/download-resume')
def download_resume():
    """Download resume"""
    resume_path = os.path.join('static', 'resume.pdf')
    
    if os.path.exists(resume_path):
        return send_file(resume_path, as_attachment=True, download_name='Resume_Akshay_Geedan.pdf')
    else:
        return render_template('resume_not_found.html'), 404

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
