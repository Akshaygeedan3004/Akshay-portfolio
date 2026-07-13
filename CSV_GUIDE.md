# CSV Data Management Guide

This guide explains how to manage your portfolio data using the CSV files.

## 📂 CSV Files Overview

Your portfolio uses two main CSV files for dynamic content:

1. **`data/work_experience.csv`** - Professional work experience
2. **`data/projects.csv`** - Projects and technical work

---

## 🏢 Work Experience CSV

**File**: `data/work_experience.csv`

### Columns

| Column | Description | Example |
|--------|-------------|---------|
| `company` | Company name | "MoII AI" |
| `location` | Company location | "Michigan, US" |
| `work_type` | Work arrangement | "Remote", "Hybrid", "On-site" |
| `title` | Your job title | "Technical Lead" |
| `start_date` | Start date | "March 2023" |
| `end_date` | End date | "Present" or "March 2024" |
| `description` | Job description | Detailed description of role |
| `key_achievements` | List of achievements | Separate with `\|` character |

### Example Entry

```csv
company,location,work_type,title,start_date,end_date,description,key_achievements
"MoII AI","Michigan, US","Remote","Technical Lead","March 2023","Present","As Lead Developer at MoII AI, I lead the design, architecture, development, and deployment of mission-critical AI systems.","Built scalable chat engines|Implemented CI/CD pipelines|Led engineering teams|Deployed production systems"
```

### Key Points

- ✅ Use quotes around fields that contain commas
- ✅ Use `|` (pipe) to separate multiple achievements
- ✅ Use "Present" for current positions
- ✅ Keep descriptions concise but informative

---

## 🚀 Projects CSV

**File**: `data/projects.csv`

### Columns

| Column | Description | Example |
|--------|-------------|---------|
| `project_name` | Project title | "Chatbot Development (Agentic RAG System)" |
| `category` | Project category | "AI & Machine Learning" |
| `description` | Project description | Brief overview of the project |
| `technologies` | Tech stack used | Separate with `•` character |
| `key_features` | Major features | Separate with `\|` character |

### Example Entry

```csv
project_name,category,description,technologies,key_features
"Chatbot Development","AI & Machine Learning","Designed and architected an end-to-end Agentic RAG system.","Python • LangGraph • Gemini API • RAG • WebSockets","Built orchestration workflow|Integrated Gemini LLM|Implemented caching|Real-time WebSocket communication"
```

### Project Categories

Use one of these categories (or create your own):

- `AI & Machine Learning`
- `Cloud Infrastructure & DevOps`
- `Backend Development`
- `Healthcare & Data Analytics`
- `Security & Deployment`
- `Computer Vision & AI`
- `Development Tools & Infrastructure`
- `Monitoring & Observability`

### Key Points

- ✅ Use quotes around all fields
- ✅ Use `•` (bullet) to separate technologies
- ✅ Use `|` (pipe) to separate key features
- ✅ Category determines the icon and grouping on the page

---

## 📝 How to Edit CSV Files

### Method 1: Text Editor (Recommended for Tech Users)

1. Open the CSV file in any text editor (VS Code, Notepad++, etc.)
2. Follow the format exactly as shown in examples
3. Save the file with UTF-8 encoding

### Method 2: Spreadsheet Software (Excel, Google Sheets)

1. Open the CSV in Excel or Google Sheets
2. Edit the data in the spreadsheet
3. **Important**: When saving, choose "CSV UTF-8 (Comma delimited)" format
4. Verify the file still looks correct in a text editor

---

## ✅ Best Practices

### Do's ✅

- ✅ Always use UTF-8 encoding
- ✅ Put quotes around fields containing commas
- ✅ Use consistent date formats
- ✅ Keep descriptions clear and concise
- ✅ Test the website after making changes

### Don'ts ❌

- ❌ Don't use commas in achievements/features (use `|` instead)
- ❌ Don't delete the header row
- ❌ Don't use special characters that might break CSV format
- ❌ Don't forget quotes around multi-word entries

---

## 🔧 Adding New Entries

### Add New Work Experience

1. Open `data/work_experience.csv`
2. Add a new line at the end
3. Fill in all columns following the format
4. Save the file
5. Refresh your website

### Add New Project

1. Open `data/projects.csv`
2. Add a new line at the end
3. Fill in all columns following the format
4. Choose appropriate category
5. Save the file
6. Refresh your website

---

## 🗑️ Removing Entries

Simply delete the entire line (row) from the CSV file and save.

---

## 🐛 Troubleshooting

### Problem: Website shows no data
**Solution**: Check that CSV files exist in the `data/` folder and have correct headers

### Problem: Data appears incorrectly
**Solution**: 
- Verify all fields are properly quoted
- Check for extra commas or line breaks
- Ensure UTF-8 encoding

### Problem: Achievements/Features not showing as bullets
**Solution**: Make sure you're using the `|` (pipe) character, not comma or other separators

### Problem: Technologies not displaying properly
**Solution**: Use the `•` (bullet) character between technologies, not comma

---

## 📋 Quick Reference

### Special Characters

- `|` (pipe) - Use for separating achievements and features
- `•` (bullet) - Use for separating technologies
- `"` (quotes) - Use around all text fields

### Getting Special Characters

- **Bullet (•)**: 
  - Windows: Alt + 7 (numpad)
  - Mac: Option + 8
  - Copy: •
  
- **Pipe (|)**: 
  - Windows/Mac: Shift + \
  - Copy: |

---

## 🔄 After Making Changes

1. Save the CSV file
2. Restart your Flask application (if running)
3. Refresh your browser
4. Verify the changes appear correctly

---

## 📞 Need Help?

If you encounter issues:

1. Check the CSV format matches the examples exactly
2. Verify file encoding is UTF-8
3. Look for common errors (missing quotes, wrong separators)
4. Test with a simple entry first
5. Check browser console for errors

---

**Happy editing! 🎉**
