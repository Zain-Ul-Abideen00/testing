import Link from "next/link";

function Homepage() {
    return (
      <div className="">
        <div className="max-w-lg mx-auto p-8 ">
          <details
            className="open:bg-slate-900 open:ring-1 open:ring-white/10 open:shadow-lg p-6 rounded-lg bg-slate-900"
            open
          >
            <summary className="text-sm leading-6 text-white font-semibold select-none">
              I am ZAIN
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-400">
              <p>I am Developer</p>
            </div>
          </details>
        </div>
      </div>
    );
}

export default Homepage;
