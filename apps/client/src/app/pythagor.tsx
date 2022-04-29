export function Pythagoras({ title }: { title: string }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          html {
            -webkit-text-size-adjust: 100%;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
            line-height: 1.5;
            tab-size: 4;
            scroll-behavior: smooth;
          }
          body {
            font-family: inherit;
            line-height: inherit;
            margin: 0;
          }
          h1,
          h2,
          p,
          pre {
            margin: 0;
          }
          *,
          ::before,
          ::after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: currentColor;
          }
          h1,
          h2 {
            font-size: inherit;
            font-weight: inherit;
          }
          a {
            color: inherit;
            text-decoration: inherit;
          }
          pre {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              'Liberation Mono', 'Courier New', monospace;
          }
          svg {
            display: block;
            vertical-align: middle;
          }
          
          svg {
            shape-rendering: auto;
            text-rendering: optimizeLegibility;
          }
          pre {
            background-color: rgba(55, 65, 81, 1);
            border-radius: 0.25rem;
            color: rgba(229, 231, 235, 1);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              'Liberation Mono', 'Courier New', monospace;
            overflow: scroll;
            padding: 0.5rem 0.75rem;
          }
          
          .shadow {
            box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          .rounded {
            border-radius: 1.5rem;
          }
          
          .wrapper {
            width: 100%;
          }
          .container {
            margin-left: auto;
            margin-right: auto;
            max-width: 768px;
            padding-bottom: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
            color: rgba(55, 65, 81, 1);
            width: 100%;
          }
          #welcome {
            margin-top: 2.5rem;
          }
          #welcome h1 {
            font-size: 3rem;
            font-weight: 500;
            letter-spacing: -0.025em;
            line-height: 1;
          }
          #welcome span {
            display: block;
            font-size: 1.875rem;
            font-weight: 300;
            line-height: 2.25rem;
            margin-bottom: 0.5rem;
          }
          #hero {
            align-items: center;
            background-color: hsla(214, 62%, 21%, 1);
            border: none;
            box-sizing: border-box;
            color: rgba(55, 65, 81, 1);
            display: grid;
            grid-template-columns: 1fr;
            margin-top: 3.5rem;
          }
          #hero .text-container {
            color: rgba(255, 255, 255, 1);
            padding: 3rem 2rem;
          }
          #hero .text-container h2 {
            font-size: 1.5rem;
            line-height: 2rem;
            position: relative;
          }
          #hero .text-container h2 svg {
            color: hsla(162, 47%, 50%, 1);
            height: 2rem;
            left: -0.25rem;
            position: absolute;
            top: 0;
            width: 2rem;
          }
          #hero .text-container h2 span {
            margin-left: 2.5rem;
          }
          #hero .text-container a {
            background-color: rgba(255, 255, 255, 1);
            border-radius: 0.75rem;
            color: rgba(55, 65, 81, 1);
            display: inline-block;
            margin-top: 1.5rem;
            padding: 1rem 2rem;
            text-decoration: inherit;
          }
          #hero .logo-container {
            display: none;
            justify-content: center;
            padding-left: 2rem;
            padding-right: 2rem;
          }
          #hero .logo-container svg {
            color: rgba(255, 255, 255, 1);
            width: 66.666667%;
          }
          
          #middle-content {
            align-items: flex-start;
            display: grid;
            gap: 4rem;
            grid-template-columns: 1fr;
            margin-top: 3.5rem;
          }
          
          #learning-materials {
            padding: 2.5rem 2rem;
          }
          #learning-materials h2 {
            font-weight: 500;
            font-size: 1.25rem;
            letter-spacing: -0.025em;
            line-height: 1.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .list-item-link {
            align-items: center;
            border-radius: 0.75rem;
            display: flex;
            margin-top: 1rem;
            padding: 1rem;
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            width: 100%;
          }
          .list-item-link svg:first-child {
            margin-right: 1rem;
            height: 1.5rem;
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            width: 1.5rem;
          }
          .list-item-link > span {
            flex-grow: 1;
            font-weight: 400;
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          .list-item-link > span > span {
            color: rgba(107, 114, 128, 1);
            display: block;
            flex-grow: 1;
            font-size: 0.75rem;
            font-weight: 300;
            line-height: 1rem;
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          .list-item-link svg:last-child {
            height: 1rem;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            width: 1rem;
          }
          .list-item-link:hover {
            color: rgba(255, 255, 255, 1);
            background-color: hsla(162, 47%, 50%, 1);
          }
          .list-item-link:hover > span {
          }
          .list-item-link:hover > span > span {
            color: rgba(243, 244, 246, 1);
          }
          .list-item-link:hover svg:last-child {
            transform: translateX(0.25rem);
          }
          
          #other-links {
          }
          .button-pill {
            padding: 1.5rem 2rem;
            transition-duration: 300ms;
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            display: flex;
          }
          .button-pill svg {
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            flex-shrink: 0;
            width: 3rem;
          }
          .button-pill > span {
            letter-spacing: -0.025em;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .button-pill span span {
            display: block;
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 1.25rem;
          }
          .button-pill:hover svg,
          .button-pill:hover {
            color: rgba(255, 255, 255, 1) !important;
          }
          #nx-console:hover {
            background-color: rgba(0, 122, 204, 1);
          }
          #nx-console svg {
            color: rgba(0, 122, 204, 1);
          }
          
          #nx-repo:hover {
            background-color: rgba(24, 23, 23, 1);
          }
          #nx-repo svg {
            color: rgba(24, 23, 23, 1);
          }
          
          #nx-cloud {
            margin-bottom: 2rem;
            margin-top: 2rem;
            padding: 2.5rem 2rem;
          }
          #nx-cloud > div {
            align-items: center;
            display: flex;
          }
          #nx-cloud > div svg {
            border-radius: 0.375rem;
            flex-shrink: 0;
            width: 3rem;
          }
          #nx-cloud > div h2 {
            font-size: 1.125rem;
            font-weight: 400;
            letter-spacing: -0.025em;
            line-height: 1.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          #nx-cloud > div h2 span {
            display: block;
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 1.25rem;
          }
          #nx-cloud p {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: 1rem;
          }
          #nx-cloud pre {
            margin-top: 1rem;
          }
          #nx-cloud a {
            color: rgba(107, 114, 128, 1);
            display: block;
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-top: 1.5rem;
            text-align: right;
          }
          #nx-cloud a:hover {
            text-decoration: underline;
          }
          
          #commands {
            padding: 2.5rem 2rem;
          
            margin-top: 3.5rem;
          }
          #commands h2 {
            font-size: 1.25rem;
            font-weight: 400;
            letter-spacing: -0.025em;
            line-height: 1.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          #commands p {
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.5rem;
            margin-top: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          details {
            align-items: center;
            display: flex;
            margin-top: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            width: 100%;
          }
          details pre > span {
            color: rgba(181, 181, 181, 1);
          }
          summary {
            border-radius: 0.5rem;
            display: flex;
            font-weight: 400;
            padding: 0.5rem;
            cursor: pointer;
            transition-property: background-color, border-color, color, fill, stroke,
              opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          summary:hover {
            background-color: rgba(243, 244, 246, 1);
          }
          summary svg {
            height: 1.5rem;
            margin-right: 1rem;
            width: 1.5rem;
          }
          
          #love {
            color: rgba(107, 114, 128, 1);
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-top: 3.5rem;
            opacity: 0.6;
            text-align: center;
          }
          #love svg {
            color: rgba(252, 165, 165, 1);
            width: 1.25rem;
            height: 1.25rem;
            display: inline;
            margin-top: -0.25rem;
          }
          
          @media screen and (min-width: 768px) {
            #hero {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            #hero .logo-container {
              display: flex;
            }
            #middle-content {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          `,
        }}
      />
      <div className="min-h-screen bg-gray-50 py-4 flex flex-col relative overflow-hidden">
      <div className="w-[97%] max-w-2xl mx-auto my-6 text-txwl">
        <div className="text-[2.6rem]">
          <h1 className="leading-tight tracking-tight font-semibold">
            <p className="text-[1.7rem] font-thin">Welcome to</p>
            Pythagoras project 🔭<span
              className="text-4xl relative bottom-8 left-1 opacity-20 blur-[1.5px] sepia-[0.5]"
              >✨</span
            >
          </h1>
        </div>
        <div
          className="relative my-12 bg-nrwl shadow-xl ring-1 ring-gray-900/5 rounded-3xl"
        >
          <div className="grid grid-cols-2">
            <div className="text-white px-7 pt-10 pb-14">
              <h2>
                <svg
                  className="h-8 w-8 inline"
                  fill="none"
                  stroke="rgb(68, 187, 151)"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42
                  3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138
                  3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42
                  0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0
                  00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806
                  3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42
                  0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0
                  013.138-3.138z"
                  />
                </svg>
                <span className="text-xl relative top-1"
                  >You&apos;re up and running</span
                >
              </h2>
              <a
                href="https://digipedia.dq.skoda.vwg/pages/viewpage.action?spaceKey=SOMET&title=Pythagoras+project"
                className="bg-white inline-block mt-6 py-3 px-7 rounded-xl text-black"
              >
                What&apos;s next?
              </a>
            </div>
            <div className="text-white flex pl-4 relative overflow-hidden">
              <img
                className="w-2/3"
                src="../assets/zqo94vwivl0yfq2li2.svg"
                alt="Pythagoras"
              />
             
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-2 gap-16">
          <div className="rounded-xl shadow py-8 px-10 bg-upwhite">
            <p className="text-lg font-semibold">Starting materials</p>
            <a
              href="https://digipedia.dq.skoda.vwg/pages/viewpage.action?spaceKey=SOMET&title=Pythagoras+project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
            <img
            className="w-[24px] h-[24px] mr-4"
            src="../assets/confluence.svg"
            alt="Pythagoras"
          />
              <span>
                Documentation
                <span> Confluence website </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
            href="https://jira.dq.skoda.vwg/secure/RapidBoard.jspa?rapidView=178&projectKey=EXS&view=planning&selectedIssue=EXS-1&issueLimit=100"
            target="_blank"
            rel="noreferrer"
            className="list-item-link"
          >
          <img
          className="w-[24px] h-[24px] mr-4"
          src="../assets/jira.svg"
          alt="Pythagoras"
        />
            <span>
              Jira Backlog
              <span> Kanban Tasks </span>
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
            <a
              href="https://gitlab.dq.skoda.vwg/somet/exs-preparation/-/tree/main"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
            <img
            className="w-[24px] h-[24px] mr-4"
            src="../assets/gitlab.svg"
            alt="Pythagoras"
          />
              <span>
                Gitlab repository
                <span> Main tree of proj. preparation </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://gitlab.dq.skoda.vwg/somet/example-scrum-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
            <img
            className="w-[24px] h-[24px] mr-4"
            src="../assets/git.svg"
            alt="Pythagoras"
          />
              <span>
                Gitlab
                <span> Changelog, features & events </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://jenkins.dq.skoda.vwg/job/SOMET/job/Example%20Scrum%20Project/"
              rel="noreferrer"
              className="list-item-link"
            >
            <img
            className="w-[30px] h-[34px] mr-2 ml-1"
            src="../assets/jenkins.svg"
            alt="Pythagoras"
          />
              <span>
                Jenkins documentation
                <span> Continuous integration </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            
          </div>
            <div>
              <a
              id="nx-console"
              className="button-pill rounded shadow bg-upwhite"
              href="nexus.dq.vwgroup.com/"
              target="_blank"
              rel="noreferrer"
            >
            <img
            className="w-[40px] h-[40px] mr-4 ml-2 mt-2"
            src="../assets/nexus.svg"
            alt="Pythagoras"
          />
              <span>
                Nexus repo
                <span>Install dependencies</span>
              </span>
            </a>
            <div id="nx-cloud" className="rounded shadow bg-upwhite">
              <div>
                <img
                className="w-[77px] h-[77px]"
                src="../assets/docker.svg"
                alt="Pythagoras"
              />
                <h2 className="pl-2">
                  Dockerized app
                  <span> Download docker image of project </span>
                </h2>
              </div>
              <p>
                You can start new docker image:
              </p>
              <pre>docker run -it --rm -p 8080:8080 pythagoras</pre>
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
              >
                What is Docker?
              </a>
            </div>
            

          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Pythagoras;
