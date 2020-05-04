(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{263:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial-getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-getting-started"}},[t._v("#")]),t._v(" Tutorial: Getting Started")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This tutorial covers the installation and initiation of the Antara Gaming Software Development Kit (SDK).")]),t._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMake"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Requires at least version 3.14 or greater")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://clang.llvm.org/get_started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("clang-8 or higher"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Windows Antara Gaming SDK supports both clang and clang-cl")])])]),t._v(" "),a("li",[t._v("(optional) "),a("a",{attrs:{href:"https://emscripten.org/docs/getting_started/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emscripten"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("(Install the latest web version)")])])]),t._v(" "),a("li",[t._v("(optional) "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio 2019"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("(optional) "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/cpp/build/clang-support-msbuild?view=vs-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clang VS Toolset"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("(installable through Visual Studio installer)")])])])]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("The following instructions create an installation of the Antara Gaming SDK that is useful for development and testing purposes.")]),t._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("p",[t._v("Execute the following commands in the terminal to build the project.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## bash or powershell")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## bash or powershell")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Release or Debug are available")]),t._v("\ncmake -DCMAKE_BUILD_TYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Debug -DCMAKE_CXX_COMPILER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("your_path_to_your_clang++ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Linux / Osx")]),t._v("\ncmake -DCMAKE_BUILD_TYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Debug -G "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 16 2019"')]),t._v(" -A x64 -T "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ClangCl"')]),t._v(" -DCMAKE_CXX_COMPILER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Program Files/LLVM/bin/clang-cl.exe"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Windows")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## We can even use Ninja for Windows / Linux / OSX")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## On Windows you may want to open x64 Visual Studio Terminal Prompt for using Ninja")]),t._v("\ncmake -G Ninja -DCMAKE_BUILD_TYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Debug -DCMAKE_CXX_COMPILER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("path_to_clang++ -DCMAKE_C_COMPILER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("path_to_clang "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Build (Debug / Release available)")]),t._v("\ncmake --build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --config Debug\n")])])]),a("p",[t._v("There are also additional options with the CMake that allows to activate certain features of the SDK:")]),t._v(" "),a("h3",{attrs:{id:"cmake-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake-options"}},[t._v("#")]),t._v(" CMake Options")]),t._v(" "),a("p",[t._v("(Please use the scroll bar at the bottom of the table to view all table cells.)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("How to enable it")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("USE_SFML_ANTARA_WRAPPER")])]),t._v(" "),a("td",[t._v("Enable the SFML module of the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_SFML_ANTARA_WRAPPER=ON")])]),t._v(" "),a("td",[t._v("Requires SFML dependencies on Linux")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("USE_IMGUI_ANTARA_WRAPPER")])]),t._v(" "),a("td",[t._v("Enable the IMGUI Support for the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_IMGUI_ANTARA_WRAPPER=ON")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ENABLE_BLOCKCHAIN_MODULES")])]),t._v(" "),a("td",[t._v("Enable the Blockchain modules for the SDK (need additional dependencies)")]),t._v(" "),a("td",[a("code",[t._v("-DENABLE_BLOCKCHAIN_MODULES=ON")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ANTARA_BUILD_DOCS")])]),t._v(" "),a("td",[t._v("Enable the build of the documentation for the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DANTARA_BUILD_DOCS=ON")])]),t._v(" "),a("td",[t._v("Require Sphinx And Doxygen")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("USE_LUA_ANTARA_WRAPPER")])]),t._v(" "),a("td",[t._v("Enable the lua module for the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_LUA_ANTARA_WRAPPER=ON")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("USE_ASAN")])]),t._v(" "),a("td",[t._v("Enable the Address Sanitizer for the Unit tests of the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_ASAN=ON")])]),t._v(" "),a("td",[t._v("Cannot be mixed with "),a("code",[t._v("USE_TSAN")]),t._v(" and "),a("code",[t._v("USE_UBSAN")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("USE_UBSAN")])]),t._v(" "),a("td",[t._v("Enable the Undefined Behavior Sanitizer for the Unit tests of the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_UBSAN=ON")])]),t._v(" "),a("td",[t._v("Cannot be mixed with "),a("code",[t._v("USE_TSAN")]),t._v(" and "),a("code",[t._v("USE_ASAN")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("USE_TSAN")])]),t._v(" "),a("td",[t._v("Enable the Undefined Behavior Sanitizer for the Unit tests of the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_TSAN=ON")])]),t._v(" "),a("td",[t._v("Cannot be mixed with "),a("code",[t._v("USE_UBSAN")]),t._v(" and "),a("code",[t._v("USE_ASAN")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("BUILD_WITH_APPIMAGE")])]),t._v(" "),a("td",[t._v("Enable the AppImage auto-generation on Linux for bundle an executable builded with the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DBUILD_WITH_APPIMAGE=ON")])]),t._v(" "),a("td",[t._v("Work’s only on Linux.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ENABLE_HTML_COMPILATION")])]),t._v(" "),a("td",[t._v("Enable the HTML Compilation on Emscripten for an executable builded with the SDK")]),t._v(" "),a("td",[a("code",[t._v("-DENABLE_HTML_COMPILATION=ON")])]),t._v(" "),a("td",[t._v("Work’s only on Emscripten")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("COVERAGE_CLION_TOOLS")])]),t._v(" "),a("td",[t._v("Enable the Coverage inside CLion IDE")]),t._v(" "),a("td",[a("code",[t._v("-DCOVERAGE_CLION_TOOLS=ON")])]),t._v(" "),a("td",[t._v("Work’s only with CLion IDE and Require "),a("code",[t._v("ENABLE_COVERAGE")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ANTARA_BUILD_EXAMPLES")])]),t._v(" "),a("td",[t._v("Enable the example of the SDK.")]),t._v(" "),a("td",[a("code",[t._v("-DANTARA_BUILD_EXAMPLES=ON")])]),t._v(" "),a("td",[t._v("Some examples need mix of options such as "),a("code",[t._v("USE_SFML_ANTARA_WRAPPER + ANTARA_BUILD_EXAMPLES")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ANTARA_BUILD_UNIT_TESTS")])]),t._v(" "),a("td",[t._v("Enable the unit tests of the SDK.")]),t._v(" "),a("td",[a("code",[t._v("-DANTARA_BUILD_UNIT_TESTS=ON")])]),t._v(" "),a("td",[t._v("Some examples need mix of options such as "),a("code",[t._v("USE_LUA_ANTARA_WRAPPER + ANTARA_BUILD_UNIT_TESTS")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("USE_BOX2D_ANTARA_WRAPPER")])]),t._v(" "),a("td",[t._v("Enable the Box2D modules of the SDK.")]),t._v(" "),a("td",[a("code",[t._v("-DUSE_BOX2D_ANTARA_WRAPPER=ON")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ENABLE_COVERAGE")])]),t._v(" "),a("td",[t._v("Enable the coverage macros for the SDK.")]),t._v(" "),a("td",[a("code",[t._v("-DENABLE_COVERAGE=ON")])]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"initiating-the-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initiating-the-project"}},[t._v("#")]),t._v(" Initiating the Project")]),t._v(" "),a("p",[t._v("Installation is not necessary.")]),t._v(" "),a("p",[t._v("Simply use the CMake "),a("code",[t._v("fetch_content")]),t._v(" command to use the project.")]),t._v(" "),a("h2",{attrs:{id:"running-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[t._v("#")]),t._v(" Running Tests")]),t._v(" "),a("p",[t._v("(This section assumes that the reader has compiled the Antara Gaming SDK with the option to perform unit tests enabled.)")]),t._v(" "),a("p",[t._v("Unit tests are located in the following folders.")]),t._v(" "),a("ul",[a("li",[t._v("Linux/OSX: "),a("code",[t._v("bin/unit_tests")])]),t._v(" "),a("li",[t._v("Windows: "),a("code",[t._v("bin/unit_tests/%CMAKE_BUILD_TYPE%")])])]),t._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),a("p",[t._v("(This section is still in development.)")]),t._v(" "),a("h2",{attrs:{id:"quick-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-example"}},[t._v("#")]),t._v(" Quick Example")]),t._v(" "),a("h4",{attrs:{id:"cmakelists-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmakelists-txt"}},[t._v("#")]),t._v(" CMakeLists.txt")]),t._v(" "),a("p",[t._v("Create a basic "),a("code",[t._v("CMakeLists.txt")]),t._v(". This allows the SDK to compile source code.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("##"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Uncomment those lines "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you use the gaming sdk as an external project\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(' (${CMAKE_SYSTEM_NAME} STREQUAL "Linux")')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#    set(LINUX TRUE)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")]),t._v(" ()")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v("(FetchContent)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#FetchContent_Declare(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#        antara-gaming-sdk")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#        URL https://github.com/KomodoPlatform/antara-gaming-sdk/archive/master.zip")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#FetchContent_MakeAvailable(antara-gaming-sdk)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#init_apple_env()")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quick_and_dirty quick_and_dirty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("target_link_libraries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quick_and_dirty PUBLIC antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"a-cpp-file-with-necessary-primitives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-cpp-file-with-necessary-primitives"}},[t._v("#")]),t._v(" A Cpp File with Necessary Primitives")]),t._v(" "),a("p",[t._v("Create a cpp file with the primitives necessary to launch the intended game.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<antara/gaming/core/safe.refl.hpp>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<antara/gaming/world/world.app.hpp>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("example_system")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ecs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("post_update_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("example_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("example_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" entity_registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity_registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here you can initialize your system, adding entities etc")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" final\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Your game logic here")]),t._v("\n        nb_iteration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nb_iteration: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" nb_iteration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nb_iteration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10ull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Maximum iteration reached, leaving game now\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("dispatcher_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trigger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("quit_game"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("size_t nb_iteration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0ull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("REFL_AUTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("example_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("my_world_example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" antara"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gaming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("app\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_world_example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("system_manager_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("example_system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here we load our system to use it.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    my_world_example world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"sdk-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk-components"}},[t._v("#")]),t._v(" SDK Components")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/onqtam/doctest",target:"_blank",rel:"noopener noreferrer"}},[t._v("doctest"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("The fastest feature-rich C++11/14/17/20 single-header testing framework for unit tests and TDD "),a("a",{attrs:{href:"http://bit.ly/doctest-docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://bit.ly/doctest-docs"),a("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/doom/strong_type",target:"_blank",rel:"noopener noreferrer"}},[t._v("doom-st"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("C++ implementation of strong types (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/doom/meta",target:"_blank",rel:"noopener noreferrer"}},[t._v("doom-meta"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Several metaprogramming utilities in C++ (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/emilk/loguru",target:"_blank",rel:"noopener noreferrer"}},[t._v("loguru"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("A lightweight C++ logging library (Public Domain)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/fmtlib/fmt",target:"_blank",rel:"noopener noreferrer"}},[t._v("fmt"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("A modern formatting library "),a("a",{attrs:{href:"https://fmt.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://fmt.dev"),a("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/nlohmann/json",target:"_blank",rel:"noopener noreferrer"}},[t._v("nlohmann-json"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("JSON for Modern C++ "),a("a",{attrs:{href:"https://nlohmann.github.io/json/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nlohmann.github.io/json/"),a("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/skypjack/entt",target:"_blank",rel:"noopener noreferrer"}},[t._v("EnTT"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Gaming meets modern C++")]),t._v(" "),a("li",[t._v("A fast and reliable entity-component system (ECS) (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/veselink1/refl-cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("refl-cpp"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("A compile-time reflection library for modern C++ (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ericniebler/range-v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("range-v3"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Range library for C++14/17/20")]),t._v(" "),a("li",[t._v("Basis for C++20’s "),a("code",[t._v("std::ranges")]),t._v(" (Boost Software License)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/TartanLlama/expected",target:"_blank",rel:"noopener noreferrer"}},[t._v("expected"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("C++11/14/17 "),a("code",[t._v("std::expected")]),t._v(" with functional-style extensions")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tl.tartanllama.xyz",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tl.tartanllama.xyz"),a("OutboundLink")],1),t._v(" (CC0 1.0 Universal)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ocornut/imgui",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImGui"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("Dear ImGui: Bloat-free Immediate Mode Graphical User interface for C++ with minimal dependencies (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/eliasdaler/imgui-sfml",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImGui-SFML"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("ImGui binding for use with SFML (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/SFML/SFML",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFML"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("Simple and Fast Multimedia Library")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.sfml-dev.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.sfml-dev.org/"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/DaanDeMeyer/reproc",target:"_blank",rel:"noopener noreferrer"}},[t._v("reproc"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("Cross-platform (C99/C++11) process library (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/lua/lua",target:"_blank",rel:"noopener noreferrer"}},[t._v("lua"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("The Lua repo, as seen by the Lua team. (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ThePhD/sol2",target:"_blank",rel:"noopener noreferrer"}},[t._v("sol2"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("Sol3 (sol2 v3.0)")]),t._v(" "),a("li",[t._v("a C++ <-> Lua API wrapper with advanced features and top notch performance")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://sol2.rtfd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://sol2.rtfd.io/"),a("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mrtazz/restclient-cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("restclient-cpp"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("C++ client for making HTTP/REST requests")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://code.mrtazz.com/restclient-cpp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://code.mrtazz.com/restclient-cpp/"),a("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/erincatto/Box2D",target:"_blank",rel:"noopener noreferrer"}},[t._v("box2D"),a("OutboundLink")],1),t._v(" (optional)\n"),a("ul",[a("li",[t._v("Box2D is a 2D physics engine for games")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://box2d.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://box2d.org"),a("OutboundLink")],1),t._v(" (ZLib)")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);