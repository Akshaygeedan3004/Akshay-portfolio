# Deploy Portfolio to Render.com

This guide will help you deploy your Flask portfolio website to Render.com.

## Prerequisites
- A GitHub account
- A Render.com account (free tier available)
- Your code pushed to GitHub

## Step 1: Push Code to GitHub

First, commit and push all your changes:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

## Step 2: Set Up Render.com

1. **Go to Render.com**
   - Visit https://render.com
   - Click "Get Started for Free" or "Sign In"
   - Sign in with your GitHub account (Akshaygeedan3004)

2. **Create a New Web Service**
   - Click "New +" button (top right)
   - Select "Web Service"
   - Connect to your GitHub repository: `Akshaygeedan3004/Akshay-portfolio`
   - Click "Connect"

## Step 3: Configure Your Web Service

Fill in the following settings:

### Basic Settings
- **Name**: `akshay-portfolio` (or your preferred name)
- **Region**: Choose the closest region (e.g., Oregon, Singapore)
- **Branch**: `main`
- **Root Directory**: (leave blank)

### Build & Deploy Settings
- **Runtime**: `Python 3`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn app:app`

### Instance Type
- **Free** (or choose a paid plan if needed)

### Environment Variables (Optional)
You can add these later if needed:
- `PYTHON_VERSION`: `3.11.0`

## Step 4: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start your application
3. Wait 2-5 minutes for the first build

## Step 5: Access Your Website

Once deployed:
- Your site will be live at: `https://akshay-portfolio.onrender.com` (or your chosen name)
- Render provides a free SSL certificate automatically

## Automatic Deployments

After initial setup, Render will automatically deploy whenever you push to the `main` branch on GitHub!

## Troubleshooting

### Build Fails
- Check the build logs on Render dashboard
- Ensure all files are committed to GitHub
- Verify `requirements.txt` is correct

### Site Not Loading
- Check if `data/` folder and CSV files are in your repository
- Ensure `static/` folder contains all necessary files
- Review the service logs on Render dashboard

### Need to Update
```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main
# Render will auto-deploy!
```

## Using render.yaml (Alternative Method)

Your project now includes a `render.yaml` file. You can also deploy using:

1. Go to Render Dashboard
2. Click "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically detect `render.yaml` and configure everything

## Custom Domain (Optional)

To use your own domain:
1. Go to your service settings on Render
2. Click "Custom Domain"
3. Follow the instructions to add your domain
4. Update DNS records as instructed

## Important Notes

- **Free tier**: May sleep after inactivity (takes 30s to wake up on first request)
- **Storage**: Files uploaded during runtime won't persist (use external storage for user uploads)
- **Environment**: Production mode - debug mode is disabled

## Support

- Render Docs: https://render.com/docs
- Community Forum: https://community.render.com

---

Your portfolio is now ready to deploy! 🚀
