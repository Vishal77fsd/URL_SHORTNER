import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [url, setURL] = useState("");
  const [message, setMessage] = useState("");
  const [clipboard, setClipboard] = useState("");

  const handleSubmit = async () => {
    if (url === "") {
      toast("Please Provide A Link!");
      return;
    }

    const data = await axios.post("http://localhost:3000/api/url/", {
      url,
    });

    if (data.data.info) {
      setMessage(data.data.info);

      if (data.data.message) {
        toast(data.data.message);
      }
      setTimeout(() => {
        setMessage("");
      }, 10000);
    }

    setURL("");
  };

  const handleCopyToClipboard = () => {
    setClipboard(`http://localhost:3000/api/shorturl/` + message.shortURL);

    const textArea = document.createElement("textarea");
    textArea.value = clipboard;
    document.body.appendChild(textArea);

    textArea.select();
    textArea.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(textArea);

    toast("Link Copied To Clipboard");
  };

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-bold font-poppins">
        URL Shortener
      </h1>
      <br />

      <form
        action="#"
        className="flex m-auto justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="Enter URL Here"
          value={url}
          onChange={(e) => setURL(e.target.value)}
          className="min-w-[50%] p-4 border border-gray-700 rounded-md outline-2"
        />
        <button
          className="m-4 text-white border border-red-700 bg-red-400 p-2 rounded-md"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </form>

      <h2 className="text-center font-poppins">
        URL Shortener Link Will Appear Here
        {message && (
          <div className="p-6">
            <span className="font-semibold border border-blue-700 p-4 bg-blue-600">
              {`http://localhost:3000/api/shorturl/` + message.shortURL}
              <span
                className="bg-black text-white p-2 rounded-md m-2 cursor-pointer"
                onClick={() => handleCopyToClipboard()}
              >
                Copy
              </span>
            </span>
          </div>
        )}
      </h2>
    </div>
  );
};

export default Home;
