// export const uploadToCloudinary = async (pics:any) => {
//    console.log("pics : ", pics);

//     const cloud_name="dex3llsph"
//     const upload_preset="my"
    
//     if (pics) {
      
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", upload_preset);
//       data.append("cloud_name", cloud_name);
  
//       const res = await 
//       fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
//         method: "post",
//         body: data,
//       })
        
//       console.log("res : ", res);
//         const fileData=await res.json();
//         console.log("url : ", fileData);
//         return fileData.url
  
//     } else {
//       console.log("error");
//     }
//   };


export const uploadToCloudinary = async (pics: File) => {
  const cloud_name = "dex3llsph";
  const upload_preset = "capitalMart";

  if (!pics) {
    console.log("error: no file provided");
    return null;
  }

  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", upload_preset);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const fileData = await res.json();
    console.log("uploaded file:", fileData);

    return fileData.secure_url; // use secure_url instead of url
  } catch (err) {
    console.error("Upload error:", err);
    return null;
  }
};
