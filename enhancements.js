const originalUpload=fileInput.onchange;
fileInput.onchange=e=>{originalUpload(e);if(e.target.files[0]){data.files[0].folderId=currentFolder;save();page='sections';render();toast(currentFolder?'Uploaded to this section':'Document uploaded')}};
main.addEventListener('click',e=>{const card=e.target.closest('[data-pick]');if(!card||selecting)return;currentFolder=data.folders[+card.dataset.pick].id;render()},{capture:true});
document.addEventListener('click',e=>{if(e.target.closest('[data-action="upload"]')&&page!=='sections')currentFolder=null;if(e.target.closest('.nav-item[data-page="sections"]')&&page!=='sections')currentFolder=null},{capture:true});
