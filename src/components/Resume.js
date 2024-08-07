export default function Resume() {
  return (
    <section id="Resume" class=" b rounded-md">
      <div class="px-4 mx-auto max-w-screen-xl text-center   py-24 lg:py-52">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          ABOUT ME
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Hello, I'm Hemanth Kumar, currently a student at PSG College,
          specializing as a full-stack developer. My expertise spans MongoDB,
          React.js, Node.js, Express.js, HTML, CSS, and I am skilled in using
          Tailwind CSS and Bootstrap.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:adb98410-cb7a-431e-8284-3d4031c1bb43"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Resume
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
