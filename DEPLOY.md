# How to Deploy Your Portfolio

Since your portfolio is a static site (it doesn't need a running backend server for now), the easiest and best way to deploy it is using **Vercel** or **Netlify**. Both are free and very fast.

## Option 1: Deploy with Vercel (Recommended)

1.  **Push your code to GitHub**: Make sure your latest code is committed and pushed to a GitHub repository.
2.  **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign up/login with GitHub.
3.  **Add New Project**: Click "Add New..." -> "Project".
4.  **Import Repository**: Find your portfolio repository and click "Import".
5.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect "Vite". If not, select "Vite".
    *   **Root Directory**: `client` (IMPORTANT: You must set this because your frontend code is in the `client` folder).
    *   **Build Command**: `npm run build` (Default is usually fine, but ensure it runs `vite build`).
    *   **Output Directory**: `dist` (Default).
    *   **Environment Variables**: You shouldn't need any for a static deploy unless you have specific client-side keys.
6.  **Deploy**: Click "Deploy".

**Note on Root Directory**: If Vercel asks for the root directory, select `client`. However, since we added a `vercel.json` in the root and a `build:client` script in the root `package.json`, you can also deploy from the **root** directory with these settings:
*   **Root Directory**: `./` (Leave as default/root)
*   **Build Command**: `npm run build:client`
*   **Output Directory**: `dist/public`

**I have configured the project to work best with the Root Directory method:**
1.  Import repo.
2.  Leave Root Directory as `./` (default).
3.  **Build Command**: Override and set to `npm run build:client`
4.  **Output Directory**: Override and set to `dist/public`
5.  Click Deploy.

## Option 2: Deploy with Netlify

1.  **Go to Netlify**: Visit [netlify.com](https://netlify.com).
2.  **Add New Site**: Click "Add new site" -> "Import from existing project".
3.  **Connect to GitHub**: Choose GitHub and authorize.
4.  **Pick Repository**: Select your portfolio repo.
5.  **Build Settings**:
    *   **Base directory**: `/` (Root)
    *   **Build command**: `npm run build:client`
    *   **Publish directory**: `dist/public`
6.  **Deploy**: Click "Deploy Site".

## Verification
After deployment, visit the URL provided by Vercel/Netlify. Your site should be live!
