<div className="px-2 rounded-4 mt-4 border border-danger w-100 mx-auto">
<div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
  <div
    className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
      imageCat === "siteview" &&
      "text-danger border-danger border-bottom"
    }`}
    style={{ fontSize: "20px", width: "20%" }}
    onClick={() => setImageCat("siteview")}
  >
    Site View
  </div>
  <div
    className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
      imageCat === "fmb" && "text-danger border-danger border-bottom"
    } `}
    style={{ fontSize: "20px", width: "20%" }}
    onClick={() => setImageCat("fmb")}
  >
    FMB
  </div>{" "}
  <div
    className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
      imageCat === "location" &&
      "text-danger border-danger border-bottom"
    }`}
    style={{ fontSize: "20px", width: "20%" }}
    onClick={() => setImageCat("location")}
  >
    Location Map
  </div>
</div>

{imageCat === "siteview" && (
  <>
    <div
      className="d-flex justify-content-center align-items-center p-0 m-0"
      style={{ height: "250px" }}
    >
      <label
        htmlFor="uploadInput"
        className="text-danger btn border border-danger py-3 px-5 rounded-5"
      >
        Upload Photos
      </label>
      <input
        id="uploadInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
        multiple
      />
    </div>

    {/* Render uploaded images */}
    <div className="d-flex flex-wrap justify-content-center">
      {siteImages.map((image) => (
        <div key={image.id} className="m-2 position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`Uploaded ${imageCat} image`}
            className="rounded-3"
            style={{ maxWidth: "100px", height: "100px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={() => handleRemoveImage(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  </>
)}

{/* fmb */}
{imageCat === "fmb" && (
  <>
    <div
      className="d-flex justify-content-center align-items-center p-0 m-0"
      style={{ height: "250px" }}
    >
      <label
        htmlFor="uploadInput"
        className="text-danger btn border border-danger py-3 px-5 rounded-5"
      >
        Upload Photos
      </label>
      <input
        id="uploadInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>

    {/* Render uploaded images */}
    <div className="d-flex flex-wrap justify-content-center">
      {fmbImages.map((image) => (
        <div key={image.id} className="m-2 position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`Uploaded ${imageCat} image`}
            className="rounded-3"
            style={{ maxWidth: "100px", height: "100px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={() => handleRemoveImage(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  </>
)}

{/* location map */}
{imageCat === "location" && (
  <>
    <div
      className="d-flex justify-content-center align-items-center p-0 m-0"
      style={{ height: "250px" }}
    >
      <label
        htmlFor="uploadInput"
        className="text-danger btn border border-danger py-3 px-5 rounded-5"
      >
        Upload Photos
      </label>
      <input
        id="uploadInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>

    {/* Render uploaded images */}
    <div className="d-flex flex-wrap justify-content-center">
      {locationImages.map((image) => (
        <div key={image.id} className="m-2 position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`Uploaded ${imageCat} image`}
            className="rounded-3"
            style={{ maxWidth: "100px", height: "100px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={() => handleRemoveImage(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  </>
)}
</div>  