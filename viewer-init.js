import { initDemoViewer } from "./static/js/demo.js?v=30fps";

async function initViewer() {
  const response = await fetch("./assets/site_data.json");
  const siteData = await response.json();

  initDemoViewer({
    containerId: "agile-viewer",
    galleryId: "agile-thumbnail-gallery",
    thumbnailList: siteData.viewerSequences,
  });
}

initViewer().catch((err) => {
  console.error("Failed to initialize AGILE viewer on ECCV paper site.", err);
});
