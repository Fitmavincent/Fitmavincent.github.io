# Projects Showcase Setup

I've added a projects showcase section to your Gatsby blog that appears before your blog posts. Here's how to customize it:

## How to Add Your Projects

1. **Edit the projects data**: Open `src/data/projectsData.js` and modify the `projectsData` array with your actual projects.

2. **Add project images**:
   - Place your project preview images in the `static/` folder
   - Update the `image` field in each project object to match your image filename
   - Recommended image size: 400x200px for best results

3. **Project data structure**:
```javascript
{
  id: 1, // Unique identifier
  title: "Your Project Name",
  description: "Brief description of your project",
  image: "/static/your-project-image.jpg", // Path to your image
  technologies: ["React", "Node.js", "MongoDB"], // Array of technologies used
  liveUrl: "https://your-live-project.com", // Link to live project
  githubUrl: "https://github.com/username/repo", // GitHub repository (optional)
  featured: true // Set to true to show in showcase, false to hide
}
```

## Styling Customization

The projects section uses your existing color scheme defined in `src/styles/global.css`:
- `--polynesian-blue` for text
- `--steel-blue` for links
- `--safety-orange` for accents and hover effects
- `--vista-blue` for borders
- `--alice-blue` for backgrounds

You can modify the styling by editing `src/components/projects.js`.

## Features

- **Responsive design**: Cards adjust to different screen sizes
- **Hover effects**: Cards lift and change colors on hover
- **Technology tags**: Shows the tech stack for each project
- **Fallback images**: If project images fail to load, a placeholder is shown
- **External links**: Projects link to live websites in new tabs
- **Integration**: Seamlessly fits with your existing blog design

## File Structure

```
src/
├── components/
│   └── projects.js          # Main projects component
├── data/
│   └── projectsData.js      # Projects data configuration
├── pages/
│   └── index.tsx           # Homepage (updated to include projects)
└── styles/
    └── global.css          # Updated with projects styling
```

## Next Steps

1. Replace the sample project data with your actual projects
2. Add your project images to the `static/` folder
3. Customize the styling if needed
4. Consider adding more projects or creating a dedicated projects page

The projects section will automatically show up to 6 featured projects. You can control which projects appear by setting `featured: true` in your project data.
