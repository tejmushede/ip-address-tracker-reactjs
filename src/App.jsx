import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";

export default function App() {

  return (
    <>
      <section>

        <div>
          <img src={background} alt="" className="w-full h-80" />
        </div>

        <article>
          <h1>IP Address Tracker.</h1>

          <form>
            <input type="text" name="ipaddress" id="ipaddress" placeholder="Search for any IP Address or domain" required />
            <button type="submit">
              <img src={arrow} alt="" />
            </button>
          </form>
        </article>

      </section>

    </>
  )
}


