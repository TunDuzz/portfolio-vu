import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer (Course Project)",
    company_name: "Web Bán Hàng – HUTECH",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Phát triển hệ thống quản lý danh mục và sản phẩm sử dụng ASP.NET Core MVC và SQL Server.",
      "Tích hợp ASP.NET Core Identity cho chức năng đăng nhập và phân quyền (Admin/User).",
      "Thực hiện seed dữ liệu mẫu, xử lý CRUD đầy đủ với Entity Framework Core.",
      "Đảm bảo giao diện quản trị dễ dùng và hệ thống hoạt động ổn định.",
    ],
  },
  {
    title: "Internship & Research",
    company_name: "HUTECH University",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Thực hành và nghiên cứu các công nghệ như Java, .NET, và React trong môi trường học thuật.",
      "Xây dựng mini project mô phỏng giao thức FTP và hệ thống Chat Socket trong Java.",
      "Tìm hiểu và ứng dụng cơ chế đồng bộ hóa, xử lý đa luồng và thuật toán mã hóa.",
      "Nâng cao kỹ năng teamwork, sử dụng Git/GitHub và viết tài liệu kỹ thuật chi tiết.",
    ],
  },
  {
    title: "Full Stack Developer (Graduation Project)",
    company_name: "Gomoku Online",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Xây dựng trò chơi Caro trực tuyến sử dụng ASP.NET Core SignalR và ReactJS.",
      "Phát triển AI Bot có nhiều cấp độ, tối ưu thuật toán Minimax và Alpha-Beta pruning.",
      "Thiết kế cơ sở dữ liệu tối ưu, hỗ trợ chat real-time giữa người chơi.",
      "Triển khai kiến trúc Clean Architecture để đảm bảo khả năng mở rộng và bảo trì lâu dài.",
    ],
  },
  {
    title: "Frontend Developer (Main Project – Noctune Music Platform)",
    company_name: "Noctune Music Platform",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Thiết kế và phát triển giao diện web nghe nhạc cá nhân hóa (giống Spotify) sử dụng React.js, Tailwind CSS và ASP.NET Core API.",
      "Xây dựng các tính năng: đăng nhập, phát nhạc, playlist, dark mode, premium user và thanh toán tích hợp (VNPay / MoMo / PayPal).",
      "Phối hợp nhóm 4 thành viên thông qua GitHub để quản lý tiến độ và review code.",
      "Tối ưu hiệu năng, UI/UX và tích hợp gợi ý nhạc thông minh bằng AI Recommendation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "“Thành công không phải là đích đến, mà là hành trình bạn không ngừng cố gắng mỗi ngày.”",
    name: "Nguyễn Hiến",
    designation: "Entrepreneur",
    company: "VN Startup",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "“Đừng sợ thất bại. Thất bại chỉ là cơ hội để bắt đầu lại một cách thông minh hơn.”",
    name: "Henry Ford",
    designation: "Founder",
    company: "Ford Motor Company",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    testimonial:
      "“Khi bạn muốn bỏ cuộc, hãy nhớ lý do vì sao bạn bắt đầu.”",
    name: "Tony Robbins",
    designation: "Motivational Speaker",
    company: "Life Coach International",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];


const certificates = [
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Tháng 9/2025",
    description: "Chứng chỉ cơ bản về JavaScript, bao gồm syntax, variables, functions, objects và DOM manipulation. Đây là bước đầu tiên trong hành trình học JavaScript.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Programming",
        color: "blue-text-gradient",
      },
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
    ],
    image: "/certificates/js1.png",
    verification_link: "https://www.credly.com/badges/55262120-2d8e-43c3-b6b1-395fae420605/public_url",
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "Tháng 10/2025",
    description: "Chứng chỉ nâng cao về JavaScript, bao gồm ES6+, async programming, modules, error handling và advanced concepts để phát triển ứng dụng web hiện đại.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "ES6+",
        color: "blue-text-gradient",
      },
      {
        name: "Async Programming",
        color: "green-text-gradient",
      },
    ],
    image: "/certificates/js2.png",
    verification_link: "https://www.credly.com/badges/6b874cc2-3dec-43b0-bf4e-150c17f3a23d/public_url",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Tháng 9/2025",
    description: "Chứng chỉ cơ bản về mạng máy tính, bao gồm TCP/IP, routing, switching, network protocols và troubleshooting. Nền tảng quan trọng cho DevOps và Cloud Computing.",
    tags: [
      {
        name: "Networking",
        color: "blue-text-gradient",
      },
      {
        name: "TCP/IP",
        color: "green-text-gradient",
      },
      {
        name: "DevOps",
        color: "pink-text-gradient",
      },
    ],
    image: "/certificates/network.png",
    verification_link: "https://www.credly.com/badges/2a47bf8e-c3af-48f9-b37f-89b508684c07/public_url",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

// Blog posts data for Blog section
const blogs = [
  // 1️⃣ Java Collections Framework
 {
  id: "java-collections-overview",
  category: "Java",
  title: "Tổng quan về Collections trong Java",
  description:
    "Java Collection Framework là nền tảng mạnh mẽ giúp lập trình viên thao tác với tập hợp dữ liệu như List, Set, Queue, Map một cách hiệu quả, linh hoạt và có thể mở rộng.",
  date: "02/04/2021",
  readTime: "15 phút đọc",
  tags: ["Java", "Collections", "Framework", "List", "Set", "Map"],
  link: "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html",
  content: [
    { type: "heading", text: "1. Giới thiệu Java Collection Framework" },
    {
      type: "paragraph",
      text: "Java Collection Framework (JCF) là một phần cốt lõi trong thư viện chuẩn của Java, cung cấp các cấu trúc dữ liệu và thuật toán phổ biến để làm việc với tập hợp dữ liệu (collections) như List, Set, Queue, Map. Nó được thiết kế để giúp việc thao tác, tìm kiếm, sắp xếp và quản lý dữ liệu trở nên dễ dàng, hiệu quả và có thể mở rộng."
    },
    {
      type: "paragraph",
      text: "Framework này bao gồm ba thành phần chính: Interface, Implementation (Class cụ thể), và Algorithms (các thuật toán xử lý dữ liệu). Ngoài ra, Java Collection còn hỗ trợ Map – một cấu trúc key-value hữu ích cho việc ánh xạ dữ liệu."
    },
    {
      type: "list",
      items: [
        "Hiệu năng cao – nhờ sử dụng các cấu trúc dữ liệu như mảng động, linked list, cây (tree) và bảng băm (hash table).",
        "Tính trừu tượng – cho phép các kiểu tập hợp khác nhau hoạt động tương tự thông qua interface.",
        "Tái sử dụng và mở rộng dễ dàng – có thể kế thừa hoặc tùy chỉnh lại các class và interface sẵn có."
      ]
    },
    {
      type: "paragraph",
      text: "Ba nhóm chính trong Collection Framework là: **Collection Interface**, **Map Interface**, và **Iterator/Algorithm**. Phần tiếp theo sẽ đi sâu vào từng nhóm chính."
    },

    { type: "heading", text: "2. Collection Interface" },
    {
      type: "paragraph",
      text: "Collection Interface là nền tảng cơ bản trong Java Collection Framework, định nghĩa các phương thức cơ bản để làm việc với tập hợp dữ liệu như thêm, xóa, kiểm tra kích thước, duyệt phần tử, v.v. Nó kế thừa từ interface Iterable, vì vậy bạn có thể duyệt qua từng phần tử bằng Iterator hoặc vòng lặp for-each."
    },
    {
      type: "code",
      language: "java",
      code: "Collection<String> names = new ArrayList<>();\nnames.add(\"Vũ\");\nnames.add(\"Minh\");\nfor (String name : names) {\n    System.out.println(name);\n}"
    },

    { type: "heading", text: "3. Set Interface" },
    {
      type: "paragraph",
      text: "Set là một tập hợp không chứa phần tử trùng lặp, tương tự như khái niệm tập hợp trong toán học. Set kế thừa từ Collection Interface và có các class triển khai phổ biến sau:"
    },
    {
      type: "list",
      items: [
        "HashSet – lưu trữ phần tử dưới dạng bảng băm (hash table), cho phép truy cập nhanh.",
        "TreeSet – lưu trữ các phần tử đã được sắp xếp theo thứ tự tự nhiên hoặc comparator tùy chọn.",
        "EnumSet – lưu trữ các phần tử thuộc kiểu enum, hiệu quả hơn nhiều so với HashSet."
      ]
    },
    {
      type: "code",
      language: "java",
      code: "Set<String> set = new HashSet<>();\nset.add(\"Java\");\nset.add(\"Python\");\nset.add(\"Java\"); // Bị bỏ qua vì trùng lặp\nSystem.out.println(set); // [Java, Python]"
    },

    { type: "heading", text: "4. List Interface" },
    {
      type: "paragraph",
      text: "List là một tập hợp có thứ tự (ordered), cho phép phần tử trùng lặp và có thể truy cập bằng chỉ số (index). Đây là kiểu cấu trúc dữ liệu phổ biến nhất khi làm việc với danh sách trong Java."
    },
    {
      type: "list",
      items: [
        "ArrayList – triển khai List dựa trên mảng có kích thước thay đổi linh hoạt.",
        "LinkedList – dựa trên danh sách liên kết đôi (double-linked list).",
        "Vector – tương tự ArrayList nhưng synchronized (an toàn luồng).",
        "Stack – kế thừa từ Vector, hoạt động theo nguyên tắc LIFO (Last-In-First-Out)."
      ]
    },
    {
      type: "code",
      language: "java",
      code: "List<String> list = new ArrayList<>();\nlist.add(\"Apple\");\nlist.add(\"Banana\");\nlist.add(1, \"Mango\");\nSystem.out.println(list); // [Apple, Mango, Banana]"
    },

    { type: "heading", text: "5. Queue Interface" },
    {
      type: "paragraph",
      text: "Queue là cấu trúc dữ liệu FIFO (First-In-First-Out), trong đó phần tử được thêm vào cuối và lấy ra ở đầu hàng đợi. Java hỗ trợ nhiều loại Queue khác nhau để xử lý các tình huống cụ thể như hàng đợi ưu tiên hoặc hàng đợi hai đầu."
    },
    {
      type: "list",
      items: [
        "LinkedList – có thể được sử dụng như Queue cơ bản.",
        "PriorityQueue – các phần tử được sắp xếp theo thứ tự ưu tiên.",
        "ArrayDeque – Queue hai đầu (Deque) hiệu suất cao dựa trên mảng."
      ]
    },
    {
      type: "code",
      language: "java",
      code: "Queue<Integer> queue = new LinkedList<>();\nqueue.add(1);\nqueue.add(2);\nqueue.add(3);\nSystem.out.println(queue.poll()); // 1 (xóa và trả về phần tử đầu tiên)"
    },

    { type: "heading", text: "6. Map Interface" },
    {
      type: "paragraph",
      text: "Map là cấu trúc dữ liệu lưu trữ các cặp key-value. Mỗi key là duy nhất, ánh xạ tới một value duy nhất. Không giống như các interface khác, Map không kế thừa từ Collection mà là một interface độc lập."
    },
    {
      type: "list",
      items: [
        "HashMap – lưu trữ dữ liệu trong bảng băm, cho phép tìm kiếm rất nhanh (O(1)).",
        "TreeMap – lưu trữ dữ liệu trong cây đỏ–đen (Red-Black Tree), các key được sắp xếp.",
        "EnumMap – key là enum, hoạt động nhanh hơn HashMap trong trường hợp cụ thể.",
        "WeakHashMap – tương tự HashMap nhưng key chỉ được giữ bằng weak reference, sẽ bị GC xóa khi không còn tham chiếu."
      ]
    },
    {
      type: "code",
      language: "java",
      code: "Map<String, Integer> map = new HashMap<>();\nmap.put(\"Java\", 8);\nmap.put(\"Python\", 3);\nSystem.out.println(map.get(\"Java\")); // 8"
    },

    { type: "heading", text: "7. Thuật toán và Tiện ích" },
    {
      type: "paragraph",
      text: "Java cung cấp class Collections với nhiều phương thức tiện ích như sắp xếp, tìm kiếm, đảo ngược, hoặc đồng bộ hóa (synchronization). Các thuật toán này hoạt động trên mọi loại Collection tương thích."
    },
    {
      type: "code",
      language: "java",
      code: "List<Integer> nums = Arrays.asList(3, 5, 1, 4);\nCollections.sort(nums);\nSystem.out.println(nums); // [1, 3, 4, 5]\nCollections.reverse(nums);\nSystem.out.println(nums); // [5, 4, 3, 1]"
    },

    { type: "heading", text: "8. Tổng kết" },
    {
      type: "paragraph",
      text: "Java Collection Framework là một hệ thống cực kỳ mạnh mẽ và linh hoạt, giúp đơn giản hóa việc xử lý tập hợp dữ liệu. Việc hiểu rõ các interface và class trong framework này sẽ giúp bạn chọn đúng cấu trúc dữ liệu cho từng bài toán, tối ưu hiệu năng và dễ dàng bảo trì mã nguồn."
    },
    {
      type: "paragraph",
      text: "Nguồn tham khảo: vietjack.com, Oracle Docs, o7planning.org, that2u.com"
    }
  ]
},

  // 2️⃣ Arrow Functions và This Context
  {
  id: "js-arrow-functions",
  category: "JavaScript",
  title: "JavaScript: Arrow Function Expressions – Viết hàm ngắn gọn và tối ưu hơn",
  description:
    "Arrow function là cú pháp rút gọn của function expression trong JavaScript. Bài viết này hướng dẫn cách sử dụng, cú pháp, sự khác biệt về this, arguments và các giới hạn của arrow function.",
  date: "10/05/2024",
  readTime: "15 phút đọc",
  tags: ["JavaScript", "Arrow Function", "ES6", "this", "Function Expression"],
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Arrow function expression là cú pháp ngắn gọn thay thế cho function expression truyền thống trong JavaScript. Tuy nhiên, chúng có một số khác biệt về ngữ nghĩa và giới hạn sử dụng. Arrow function không có binding riêng cho this, arguments, super và không thể dùng làm constructor."
    },

    { type: "heading", text: "1. Cú pháp" },
    {
      type: "code",
      language: "javascript",
      code: "() => expression\nparam => expression\n(param1, paramN) => expression\n(param1, paramN) => { statements }"
    },
    {
      type: "paragraph",
      text: "Arrow function hỗ trợ rest parameters, default parameters và destructuring. Chúng cũng có thể là hàm bất đồng bộ nếu thêm từ khóa async."
    },
    {
      type: "code",
      language: "javascript",
      code: "async (a, b) => {\n  await doSomething(a, b);\n  return 'done';\n}"
    },

    { type: "heading", text: "2. So sánh với function truyền thống" },
    {
      type: "paragraph",
      text: "Một function truyền thống có thể viết lại dần thành arrow function với cú pháp ngắn hơn. Dưới đây là các bước:"
    },
    {
      type: "code",
      language: "javascript",
      code: "// Function truyền thống\n(function (a) {\n  return a + 100;\n});\n\n// Bước 1: bỏ từ khóa function, thêm =>\n(a) => {\n  return a + 100;\n};\n\n// Bước 2: bỏ {} và từ khóa return\n(a) => a + 100;\n\n// Bước 3: bỏ dấu ngoặc nếu chỉ có 1 tham số\na => a + 100;"
    },
    {
      type: "paragraph",
      text: "Dấu ngoặc () chỉ có thể bỏ nếu hàm có duy nhất một tham số đơn giản. Nếu có nhiều tham số, hoặc dùng default/rest/destructuring, bạn bắt buộc phải giữ ()."
    },

    { type: "heading", text: "3. Function body – Biểu thức và khối lệnh" },
    {
      type: "code",
      language: "javascript",
      code: "const square = (x) => x * x; // Expression body, tự động return\n\nconst add = (x, y) => {\n  const sum = x + y;\n  return sum; // Block body, cần return\n};"
    },
    {
      type: "paragraph",
      text: "Khi return một object literal, cần bọc trong dấu ngoặc () để tránh hiểu nhầm với block statement."
    },
    {
      type: "code",
      language: "javascript",
      code: "const getUser = () => ({ name: 'Vũ', age: 22 });"
    },

    { type: "heading", text: "4. Arrow function và từ khóa this" },
    {
      type: "paragraph",
      text: "Arrow function không có binding riêng cho this. Chúng sử dụng this từ phạm vi (scope) bao ngoài, vì vậy không nên dùng arrow function làm method trong object."
    },
    {
      type: "code",
      language: "javascript",
      code: "const obj = {\n  i: 10,\n  a: () => console.log(this.i, this), // this ở đây là global\n  b() { console.log(this.i, this); },  // this là obj\n};\n\nobj.a(); // undefined, global\nobj.b(); // 10, obj"
    },
    {
      type: "paragraph",
      text: "Tuy nhiên, trong class, nếu bạn khai báo arrow function trong field, nó sẽ tự động bind this theo instance."
    },
    {
      type: "code",
      language: "javascript",
      code: "class Counter {\n  count = 0;\n  increase = () => {\n    this.count++;\n    console.log(this.count);\n  };\n}\n\nconst c = new Counter();\nsetTimeout(c.increase, 1000); // this vẫn giữ nguyên"
    },

    { type: "heading", text: "5. Arrow function và arguments" },
    {
      type: "paragraph",
      text: "Arrow function không có đối tượng arguments riêng, nên chúng tham chiếu đến arguments của scope bao ngoài."
    },
    {
      type: "code",
      language: "javascript",
      code: "function foo(n) {\n  const f = () => arguments[0] + n;\n  return f();\n}\nfoo(3); // 6"
    },
    {
      type: "paragraph",
      text: "Thay vì dùng arguments, bạn có thể dùng rest parameter."
    },
    {
      type: "code",
      language: "javascript",
      code: "function foo(n) {\n  const f = (...args) => args[0] + n;\n  return f(10);\n}\nfoo(1); // 11"
    },

    { type: "heading", text: "6. Arrow function không thể dùng làm constructor" },
    {
      type: "paragraph",
      text: "Arrow function không thể gọi bằng từ khóa new, và cũng không có thuộc tính prototype."
    },
    {
      type: "code",
      language: "javascript",
      code: "const Foo = () => {};\nconst foo = new Foo(); // TypeError: Foo is not a constructor"
    },

    { type: "heading", text: "7. Không thể dùng yield trong arrow function" },
    {
      type: "paragraph",
      text: "Arrow function không thể là generator function. Bạn không thể sử dụng từ khóa yield bên trong body của chúng."
    },

    { type: "heading", text: "8. Một số ví dụ thường gặp" },
    {
      type: "code",
      language: "javascript",
      code: "// Arrow function rỗng trả về undefined\nconst empty = () => {};\n\n// Hàm trả về trực tiếp\n(() => 'Hello')(); // 'Hello'\n\n// Dùng trong map, filter, reduce\nconst arr = [5, 6, 13, 0, 1, 18];\nconst sum = arr.reduce((a, b) => a + b, 0); // 43\nconst even = arr.filter(v => v % 2 === 0); // [6, 0, 18]\nconst double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36]"
    },
    {
      type: "paragraph",
      text: "Arrow function rất hữu ích trong các hàm callback, Promise chain hoặc sự kiện khi bạn cần giữ nguyên scope của this."
    },

    { type: "heading", text: "9. Lưu ý khi sử dụng" },
    {
      type: "list",
      items: [
        "Không nên dùng arrow function làm method trong object literal.",
        "Không dùng làm constructor.",
        "Không có arguments riêng, hãy dùng rest parameter.",
        "Không thể dùng với yield (generator).",
        "Không có prototype."
      ]
    },

    { type: "heading", text: "10. Kết luận" },
    {
      type: "paragraph",
      text: "Arrow function giúp code JavaScript ngắn gọn, dễ đọc và tránh ràng buộc phức tạp của this. Tuy nhiên, hãy hiểu rõ các giới hạn của chúng trước khi sử dụng trong class hoặc object method. Khi được dùng đúng cách, arrow function là công cụ tuyệt vời để viết code hiện đại và gọn gàng."
    }
  ]
},

  // 3️⃣ Spring Boot REST API
  {
  id: "spring-boot-rest-api-mysql",
  category: "Java",
  title: "Tạo REST API với Spring Boot + MySQL + JPA Repository",
  description:
    "Hướng dẫn từng bước xây dựng REST API đơn giản với Spring Boot, MySQL và JPA Repository. Từ cấu hình Maven, tạo model, service, controller cho đến test API bằng Postman.",
  date: "15/03/2021",
  readTime: "15 phút đọc",
  tags: ["Spring Boot", "Java", "MySQL", "JPA", "REST API"],
  link: "https://www.baeldung.com/spring-boot-building-restful-web-services",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Spring Boot là một trong những dự án nổi bật nhất của hệ sinh thái Spring Framework. Nó giúp đơn giản hóa việc khởi tạo và cấu hình ứng dụng Java. Nếu như trước đây, bạn phải cấu hình XML, khởi tạo servlet container, thêm hàng chục dependency thì giờ đây Spring Boot đã tự động hóa toàn bộ quá trình đó. Bạn chỉ cần tập trung vào business logic."
    },
    {
      type: "list",
      items: [
        "Tạo ứng dụng Spring độc lập (standalone)",
        "Nhúng trực tiếp Tomcat hoặc Jetty (không cần deploy WAR)",
        "Cấu hình tự động dựa vào dependency",
        "Starter dependency giúp setup nhanh chóng",
        "Không cần XML, chỉ cần annotation"
      ]
    },
    {
      type: "paragraph",
      text: "Trong bài viết này, chúng ta sẽ xây dựng REST API CRUD cơ bản (Create, Read, Update, Delete) với Spring Boot, JPA và MySQL."
    },

    { type: "heading", text: "1. Cấu trúc dự án" },
    {
      type: "code",
      language: "plaintext",
      code: "src/main/java\n └── com.example.demo\n     ├── DemoApplication.java\n     ├── api\n     │    └── RestApiController.java\n     ├── model\n     │    └── Contact.java\n     └── service\n          └── ContactService.java"
    },

    { type: "heading", text: "2. Tạo dự án Spring Boot" },
    {
      type: "paragraph",
      text: "Truy cập Spring Initializr tại https://start.spring.io/ và chọn cấu hình sau:"
    },
    {
      type: "list",
      items: [
        "Group: com.example",
        "Artifact: demo",
        "Dependencies: Spring Web, Spring Data JPA, MySQL Driver",
        "Java version: 1.8"
      ]
    },

    { type: "heading", text: "3. File pom.xml" },
    {
      type: "paragraph",
      text: "Dưới đây là nội dung file pom.xml mẫu:"
    },
    {
      type: "code",
      language: "xml",
      code: "<dependencies>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <scope>runtime</scope>\n  </dependency>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n    <scope>test</scope>\n  </dependency>\n</dependencies>"
    },

    { type: "heading", text: "4. File main: DemoApplication.java" },
    {
      type: "code",
      language: "java",
      code: "package com.example.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication(scanBasePackages = {\"com.example.demo\"})\npublic class DemoApplication {\n  public static void main(String[] args) {\n    SpringApplication.run(DemoApplication.class, args);\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Annotation @SpringBootApplication là sự kết hợp giữa @Configuration, @EnableAutoConfiguration và @ComponentScan. Nhờ đó, Spring Boot có thể tự động quét, cấu hình và khởi chạy ứng dụng mà không cần XML."
    },

    { type: "heading", text: "5. Cấu hình database" },
    {
      type: "code",
      language: "properties",
      code: "spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.datasource.url=jdbc:mysql://localhost:3306/test\nspring.datasource.username=root\nspring.datasource.password=\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true"
    },
    {
      type: "paragraph",
      text: "File application.properties lưu cấu hình kết nối MySQL. Thay đổi username, password, database name cho phù hợp."
    },

    { type: "heading", text: "6. Cấu trúc bảng MySQL" },
    {
      type: "code",
      language: "sql",
      code: "CREATE TABLE contact (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  age INT(3) NOT NULL,\n  dob DATE NOT NULL,\n  email VARCHAR(100) NOT NULL\n);\n\nINSERT INTO contact (name, age, dob, email) VALUES\n('Nguyen Van B', 22, '2000-11-15', 'vanb@gmail.com'),\n('Nguyen A', 21, '2001-10-01', 'a@gmail.com');"
    },

    { type: "heading", text: "7. Tạo model entity" },
    {
      type: "code",
      language: "java",
      code: "package com.example.demo.model;\n\nimport java.util.Date;\nimport javax.persistence.*;\nimport com.fasterxml.jackson.annotation.JsonIgnoreProperties;\n\n@Entity\n@JsonIgnoreProperties({\"hibernateLazyInitializer\", \"handler\"})\npublic class Contact {\n  @Id\n  @GeneratedValue(strategy = GenerationType.AUTO)\n  private Long id;\n  private String name;\n  private int age;\n  private Date dob;\n  private String email;\n\n  public Contact() {}\n\n  public Contact(String name, int age, Date dob, String email) {\n    this.name = name;\n    this.age = age;\n    this.dob = dob;\n    this.email = email;\n  }\n\n  // Getter, Setter\n}"
    },
    {
      type: "paragraph",
      text: "Annotation @Entity giúp Spring xác định class này tương ứng với bảng trong cơ sở dữ liệu. @JsonIgnoreProperties ngăn Hibernate trả về các field không cần thiết trong JSON."
    },

    { type: "heading", text: "8. Tạo Service: JpaRepository" },
    {
      type: "code",
      language: "java",
      code: "package com.example.demo.service;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\nimport com.example.demo.model.Contact;\n\n@Repository\npublic interface ContactService extends JpaRepository<Contact, Long> {\n  // JpaRepository đã có sẵn CRUD methods: save, findAll, findById, deleteById\n}"
    },

    { type: "heading", text: "9. Tạo Controller REST" },
    {
      type: "code",
      language: "java",
      code: "package com.example.demo.api;\n\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.http.*;\nimport org.springframework.web.bind.annotation.*;\nimport com.example.demo.model.Contact;\nimport com.example.demo.service.ContactService;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class RestApiController {\n  @Autowired\n  ContactService contactService;\n\n  @GetMapping(\"/contact\")\n  public ResponseEntity<List<Contact>> listAll() {\n    List<Contact> list = contactService.findAll();\n    if (list.isEmpty()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);\n    return new ResponseEntity<>(list, HttpStatus.OK);\n  }\n\n  @GetMapping(\"/contact/{id}\")\n  public ResponseEntity<Contact> findContact(@PathVariable Long id) {\n    return contactService.findById(id)\n      .map(ResponseEntity::ok)\n      .orElse(ResponseEntity.notFound().build());\n  }\n\n  @PostMapping(\"/contact\")\n  public Contact saveContact(@RequestBody Contact contact) {\n    return contactService.save(contact);\n  }\n\n  @PutMapping(\"/contact/{id}\")\n  public ResponseEntity<Contact> update(@PathVariable Long id, @RequestBody Contact c) {\n    return contactService.findById(id).map(contact -> {\n      contact.setName(c.getName());\n      contact.setAge(c.getAge());\n      contact.setDob(c.getDob());\n      contact.setEmail(c.getEmail());\n      return ResponseEntity.ok(contactService.save(contact));\n    }).orElse(ResponseEntity.notFound().build());\n  }\n\n  @DeleteMapping(\"/contact/{id}\")\n  public ResponseEntity<Void> delete(@PathVariable Long id) {\n    contactService.deleteById(id);\n    return ResponseEntity.ok().build();\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Các endpoint REST gồm GET, POST, PUT, DELETE tương ứng với CRUD. Annotation @RestController là sự kết hợp giữa @Controller và @ResponseBody."
    },

    { type: "heading", text: "10. Chạy ứng dụng" },
    {
      type: "list",
      items: [
        "Chạy trực tiếp trong Eclipse: Run as → Spring Boot App",
        "Hoặc chạy bằng command line: ./mvnw spring-boot:run"
      ]
    },

    { type: "heading", text: "11. Test API với Postman" },
    {
      type: "list",
      items: [
        "GET http://localhost:8080/api/contact → Lấy danh sách liên hệ",
        "GET http://localhost:8080/api/contact/{id} → Lấy liên hệ theo ID",
        "POST http://localhost:8080/api/contact → Thêm liên hệ mới (JSON body)",
        "PUT http://localhost:8080/api/contact/{id} → Cập nhật liên hệ",
        "DELETE http://localhost:8080/api/contact/{id} → Xóa liên hệ"
      ]
    },

    { type: "heading", text: "Kết luận" },
    {
      type: "paragraph",
      text: "Chỉ với vài bước đơn giản, bạn đã có thể xây dựng REST API hoàn chỉnh với Spring Boot, JPA và MySQL. Nhờ cơ chế auto-configuration và starter dependency, Spring Boot giúp giảm thiểu tối đa cấu hình và code dư thừa. Bạn có thể mở rộng ứng dụng với Service layer, DTO, ExceptionHandler, hoặc tích hợp Swagger để quản lý tài liệu API."
    }
  ]
},

  // 4️⃣ Async/Await
  {
  id: "js-async-await-deep",
  category: "JavaScript",
  title: "JavaScript: async/await – những keyword giúp chúng ta code bất đồng bộ dễ hơn bao giờ hết",
  description:
    "Tìm hiểu cách hoạt động của async/await trong JavaScript, từ generator đến Promise, giúp bạn viết code bất đồng bộ dễ đọc và hiệu quả hơn.",
  date: "17/07/2018",
  readTime: "15 phút đọc",
  tags: ["JavaScript", "Async", "ECMAScript 2017"],
  link: "https://manhhomienbienthuy.github.io/2018/07/17/javascript-asyncawait.html",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Trong bài viết trước, chúng ta đã tìm hiểu cách sử dụng Promise để xử lý bất đồng bộ. Trong bài viết này, chúng ta sẽ tìm hiểu thêm hai keyword mạnh mẽ được giới thiệu trong ECMAScript 2017 (ES8) – async và await. Chúng giúp code bất đồng bộ trở nên dễ hiểu và ngắn gọn hơn rất nhiều."
    },
    {
      type: "paragraph",
      text: "Để hiểu async/await hoạt động thế nào, trước tiên chúng ta cần nắm được cơ chế của generator – một tính năng được giới thiệu từ ES6, và là nền tảng cho async/await."
    },

    { type: "heading", text: "1. Generator là gì?" },
    {
      type: "paragraph",
      text: "Generator là một loại hàm đặc biệt có thể tạm dừng và tiếp tục thực thi. Thay vì chạy toàn bộ nội dung khi được gọi, generator trả về một iterator để bạn điều khiển luồng thực thi từng bước bằng phương thức next()."
    },
    {
      type: "code",
      language: "javascript",
      code: "function* generator(i) {\n    yield i;\n    yield i + 10;\n}\n\nconst gen = generator(10);\nconsole.log(gen.next().value); // 10\nconsole.log(gen.next().value); // 20"
    },
    {
      type: "paragraph",
      text: "Generator hoạt động dựa vào keyword yield. Mỗi lần gọi next(), hàm tiếp tục chạy đến yield tiếp theo và dừng lại, trả về một đối tượng có hai thuộc tính: value và done. Khi done là true, generator kết thúc."
    },

    { type: "heading", text: "2. Generator có thể yield, return và truyền tham số" },
    {
      type: "code",
      language: "javascript",
      code: "function* foo() {\n    yield 'yield';\n    return 'return';\n    yield 'unreachable';\n}\n\nconst bar = foo();\nconsole.log(bar.next()); // {value: 'yield', done: false}\nconsole.log(bar.next()); // {value: 'return', done: true}"
    },
    {
      type: "paragraph",
      text: "Generator có thể nhận dữ liệu từ bên ngoài thông qua next(param), cho phép thay đổi trạng thái bên trong. Điều này khiến generator rất linh hoạt khi kết hợp với Promise để xử lý bất đồng bộ."
    },

    { type: "heading", text: "3. Generator và Promise: Bước đệm cho async/await" },
    {
      type: "paragraph",
      text: "Generator có thể 'tạm dừng' và 'tiếp tục' thực thi mà vẫn giữ nguyên trạng thái. Kết hợp với Promise, bạn có thể tạo ra một cơ chế bất đồng bộ gần giống async/await."
    },
    {
      type: "code",
      language: "javascript",
      code: "let foo;\nfunction* bar() {\n    console.log('before async');\n    yield new Promise(resolve => setTimeout(() => resolve(1), 1000)).then(x => {\n        console.log(x);\n        foo.next();\n    });\n    console.log('after async');\n}\nfoo = bar();\nfoo.next();"
    },
    {
      type: "paragraph",
      text: "Kết quả: 'before async' được in trước, sau 1 giây in ra 1 và 'after async'. Đây chính là cơ chế “tạm dừng – tiếp tục” mà async/await được xây dựng dựa trên."
    },

    { type: "heading", text: "4. Hàm async" },
    {
      type: "paragraph",
      text: "Hàm async là một hàm luôn trả về Promise. Nếu trong hàm bạn return một giá trị bình thường, giá trị đó sẽ được bọc trong một Promise được resolve tự động."
    },
    {
      type: "code",
      language: "javascript",
      code: "async function fname() {\n    return 1;\n}\n\nfname().then(console.log); // 1"
    },
    {
      type: "paragraph",
      text: "Bạn có thể viết async function theo nhiều cách khác nhau, kể cả với arrow function hoặc expression."
    },
    {
      type: "code",
      language: "javascript",
      code: "const fname = async () => 1;\nconst another_func = async () => Promise.resolve(2);\n\nanother_func().then(console.log); // 2"
    },

    { type: "heading", text: "5. Từ khóa await" },
    {
      type: "paragraph",
      text: "Keyword await chỉ được phép sử dụng bên trong hàm async. Nó giúp tạm dừng việc thực thi trong hàm cho đến khi Promise được resolve, sau đó tiếp tục với kết quả trả về."
    },
    {
      type: "code",
      language: "javascript",
      code: "(async function() {\n    const promise = new Promise(resolve => setTimeout(() => resolve(1), 1000));\n    const result = await promise;\n    console.log(result);\n    console.log('done');\n})();"
    },
    {
      type: "paragraph",
      text: "Câu lệnh await giúp code bất đồng bộ trông giống như code đồng bộ, dễ đọc và dễ hiểu hơn. Bạn cũng có thể await nhiều Promise lần lượt hoặc song song với Promise.all."
    },

    { type: "heading", text: "6. Một số ví dụ minh họa" },
    {
      type: "code",
      language: "javascript",
      code: "(async function() {\n    const x = await 1;\n    console.log(x); // 1\n})();\n\n(async function() {\n    console.log(1);\n    const x = await 2;\n    console.log(x);\n})();\nconsole.log(3);\n// Kết quả:\n// 1\n// 3\n// 2"
    },
    {
      type: "paragraph",
      text: "await hoạt động dựa trên cơ chế bất đồng bộ của Promise, nên các câu lệnh sau await được thực thi sau khi tất cả code đồng bộ khác đã hoàn tất."
    },

    { type: "heading", text: "7. Xử lý lỗi trong async/await" },
    {
      type: "paragraph",
      text: "Nếu Promise bị reject, await sẽ ném ra một exception. Bạn có thể bắt lỗi bằng try..catch như với các hàm thông thường."
    },
    {
      type: "code",
      language: "javascript",
      code: "async function example() {\n  try {\n    const result = await doSomething();\n    console.log(result);\n  } catch (error) {\n    console.error('Lỗi:', error);\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Cũng như Promise, bạn không thể dùng try..catch bên ngoài hàm async. Thay vào đó, hãy dùng .catch() để bắt lỗi."
    },
    {
      type: "code",
      language: "javascript",
      code: "async function fetchData() {\n  return await fetch('http://no-such-url');\n}\n\nfetchData().catch(console.log);"
    },

    { type: "heading", text: "8. So sánh async/await và Promise chain" },
    {
      type: "paragraph",
      text: "Promise chain thường dễ gây callback hell khi lồng nhiều thao tác bất đồng bộ, trong khi async/await giúp code trông tự nhiên hơn, dễ debug hơn và có thể dùng try..catch."
    },
    {
      type: "code",
      language: "javascript",
      code: "// Dạng Promise chain\nfetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(response => response.json())\n  .then(json => console.log(json));\n\n// Dạng async/await\n(async function() {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n  const json = await response.json();\n  console.log(json);\n})();"
    },

    { type: "heading", text: "9. Kết luận" },
    {
      type: "paragraph",
      text: "Cặp keyword async/await mang đến cho JavaScript cơ chế tạm dừng – chạy tiếp mạnh mẽ, giúp lập trình bất đồng bộ dễ dàng, tự nhiên và sạch hơn bao giờ hết. Khi kết hợp đúng cách với Promise, async/await giúp code trở nên rõ ràng, dễ bảo trì và dễ xử lý lỗi hơn rất nhiều."
    }
  ]
} ,

  // 5️⃣ Java Stream API
  {
  id: "java-stream-api",
  category: "Java",
  title: "Tổng quan về Stream API trong Java 8",
  description:
    "Giới thiệu Stream API trong Java 8 – một tính năng mạnh mẽ giúp xử lý dữ liệu trong collection theo cách ngắn gọn, dễ đọc và hiệu quả hơn.",
  date: "10/07/2024",
  readTime: "12 phút đọc",
  tags: ["Java", "Stream API", "Functional Programming"],
  link: "https://www.baeldung.com/java-8-streams",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Stream API là một trong những tính năng nổi bật của Java 8, được giới thiệu trong package java.util.stream. Nó cho phép xử lý dữ liệu tuần tự hoặc song song trên các collection theo cách khai báo, thay vì lặp thủ công. Stream giúp code ngắn gọn, dễ hiểu, đồng thời tối ưu hiệu năng khi làm việc với tập dữ liệu lớn."
    },

    { type: "heading", text: "1. Cách Stream hoạt động" },
    {
      type: "paragraph",
      text: "Stream đại diện cho một luồng dữ liệu (các phần tử trong collection) được xử lý qua một chuỗi các thao tác (pipeline). Một pipeline có thể bao gồm nhiều intermediate operation (như filter, map, sorted) và kết thúc bằng một terminal operation (như forEach, collect)."
    },
    {
      type: "code",
      language: "java",
      code: "List<String> myList = Arrays.asList(\"a\", \"aa\", \"bb\", \"b\", \"c\");\n\nmyList.stream()\n      .filter(s -> s.startsWith(\"b\"))\n      .map(String::toUpperCase)\n      .sorted()\n      .forEach(System.out::println);\n\n// Kết quả:\n// BB\n// B"
    },
    {
      type: "paragraph",
      text: "Trong ví dụ trên, filter, map, sorted là các operation trung gian, còn forEach là operation cuối. Các operation trung gian trả về một stream mới, còn operation cuối trả về giá trị hoặc không trả về gì (void)."
    },

    { type: "heading", text: "2. Tạo Stream trong Java" },
    {
      type: "paragraph",
      text: "Stream có thể được tạo từ nhiều nguồn dữ liệu khác nhau, phổ biến nhất là từ Collection, Array hoặc trực tiếp bằng Stream.of."
    },
    {
      type: "code",
      language: "java",
      code: "Arrays.asList(\"a\", \"aa\", \"aaa\")\n      .stream()\n      .findFirst()\n      .ifPresent(System.out::println);  // a\n\nStream.of(\"a\", \"aa\", \"aaa\")\n      .findFirst()\n      .ifPresent(System.out::println);  // a"
    },
    {
      type: "paragraph",
      text: "Ngoài ra, Java cung cấp các stream đặc biệt cho kiểu dữ liệu nguyên thủy như IntStream, LongStream và DoubleStream."
    },
    {
      type: "code",
      language: "java",
      code: "IntStream.range(3, 7)\n         .forEach(System.out::println);\n// Kết quả:\n// 3\n// 4\n// 5\n// 6"
    },

    { type: "heading", text: "3. Chuyển đổi giữa các loại Stream" },
    {
      type: "paragraph",
      text: "Bạn có thể dễ dàng chuyển đổi giữa Stream đối tượng và Stream nguyên thủy."
    },
    {
      type: "code",
      language: "java",
      code: "// Object stream sang IntStream\nStream.of(\"a1\", \"c5\", \"b4\")\n      .map(s -> s.substring(1))\n      .mapToInt(Integer::parseInt)\n      .max()\n      .ifPresent(System.out::println);  // 5\n\n// IntStream sang Object stream\nIntStream.range(3, 6)\n         .mapToObj(i -> \"C\" + i)\n         .forEach(System.out::println);\n// C3\n// C4\n// C5"
    },

    { type: "heading", text: "4. Lazy Execution và Pipeline" },
    {
      type: "paragraph",
      text: "Stream hoạt động theo cơ chế 'lazy execution' – tức là các thao tác chỉ được thực thi khi có operation cuối cùng. Nếu chỉ định nghĩa pipeline mà không có terminal operation, không có gì được thực hiện."
    },
    {
      type: "code",
      language: "java",
      code: "Stream.of(\"d2\", \"a2\", \"b1\", \"b3\", \"c\")\n      .filter(s -> {\n          System.out.println(\"filter: \" + s);\n          return true;\n      }); // Không in ra gì vì chưa có terminal operation"
    },

    { type: "heading", text: "5. Stream không thể tái sử dụng" },
    {
      type: "paragraph",
      text: "Một stream chỉ có thể được sử dụng một lần. Sau khi đã gọi một terminal operation, stream đó sẽ bị đóng. Nếu cố gắng sử dụng lại, sẽ gây ra IllegalStateException."
    },
    {
      type: "code",
      language: "java",
      code: "Stream<String> stream = Stream.of(\"d2\", \"a2\", \"b1\", \"b3\", \"c\")\n      .filter(s -> s.startsWith(\"a\"));\n\nstream.anyMatch(s -> true);    // OK\nstream.noneMatch(s -> true);   // Lỗi: IllegalStateException"
    },
    {
      type: "paragraph",
      text: "Để tái sử dụng pipeline, ta có thể dùng Supplier để cung cấp stream mới mỗi lần cần gọi."
    },
    {
      type: "code",
      language: "java",
      code: "Supplier<Stream<String>> streamSupplier =\n    () -> Stream.of(\"d2\", \"a2\", \"b1\", \"b3\", \"c\")\n            .filter(s -> s.startsWith(\"a\"));\n\nstreamSupplier.get().anyMatch(s -> true);   // OK\nstreamSupplier.get().noneMatch(s -> true);  // OK"
    },

    { type: "heading", text: "6. Stream song song (Parallel Stream)" },
    {
      type: "paragraph",
      text: "Stream có thể chạy song song để tăng hiệu năng khi xử lý dữ liệu lớn. Java sử dụng ForkJoinPool.commonPool() để chia nhỏ công việc ra nhiều luồng xử lý."
    },
    {
      type: "code",
      language: "java",
      code: "Arrays.asList(\"a1\", \"a2\", \"b1\", \"c2\", \"c1\")\n      .parallelStream()\n      .filter(s -> {\n          System.out.format(\"filter: %s [%s]\\n\", s, Thread.currentThread().getName());\n          return true;\n      })\n      .map(s -> {\n          System.out.format(\"map: %s [%s]\\n\", s, Thread.currentThread().getName());\n          return s.toUpperCase();\n      })\n      .forEach(s -> System.out.format(\"forEach: %s [%s]\\n\", s, Thread.currentThread().getName()));"
    },
    {
      type: "paragraph",
      text: "Kết quả cho thấy các phần tử được xử lý trên nhiều luồng khác nhau, ví dụ như main hoặc ForkJoinPool.commonPool-worker-1. Bạn có thể chuyển song song về tuần tự bằng sequential()."
    },

    { type: "heading", text: "Kết luận" },
    {
      type: "paragraph",
      text: "Stream API là một bước tiến lớn của Java trong việc xử lý dữ liệu. Nó giúp lập trình viên viết code ngắn gọn, dễ bảo trì và tận dụng tốt hiệu năng đa luồng. Khi kết hợp với lambda expression, Stream API mở ra phong cách lập trình hàm (functional style) hiện đại và mạnh mẽ hơn trong Java 8 trở đi."
    }
  ]
},

  // 6️⃣ React Hooks
  {
  id: "react-hooks-usestate-useeffect",
  category: "JavaScript",
  title: "React Hooks: Hiểu rõ về useState và useEffect",
  description:
    "Tìm hiểu cách React Hooks như useState và useEffect giúp quản lý state và vòng đời component trong functional components, thay thế class component truyền thống.",
  date: "12/08/2024",
  readTime: "11 phút đọc",
  tags: ["JavaScript", "React", "Hooks"],
  link: "https://reactjs.org/docs/hooks-intro.html",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "React Hooks được giới thiệu từ phiên bản React 16.8 và nhanh chóng trở thành tiêu chuẩn trong cộng đồng ReactJS. Hooks cho phép bạn sử dụng state, lifecycle methods và các tính năng khác mà trước đây chỉ có trong class component. Giờ đây, bạn có thể làm tất cả điều đó trong functional components, giúp code ngắn gọn và dễ đọc hơn."
    },
    {
      type: "paragraph",
      text: "Trước khi Hooks ra đời, class component có hai ưu điểm lớn so với functional component: quản lý state (State Management) và các phương thức vòng đời (Lifecycle Methods). Trong bài viết này, chúng ta sẽ tìm hiểu cách mà Hooks giúp giải quyết hai vấn đề này."
    },

    { type: "heading", text: "1. State Management với useState" },
    {
      type: "paragraph",
      text: "Trước đây, class component sử dụng this.state và this.setState để quản lý dữ liệu. Với Hooks, bạn có thể dùng useState để làm điều tương tự trong functional component."
    },
    {
      type: "code",
      language: "javascript",
      code: "import React from 'react';\n\nclass App extends React.Component {\n  state = {\n    characterChoiceNumbers: [1,2,3,4,5],\n    chosenChoiceNumber: 1\n  }\n\n  handleChoiceChange = (newNumber) => {\n    this.setState({ chosenChoiceNumber: newNumber });\n  }\n\n  render(){\n    return(\n      <div>\n        <select onChange={(e) => this.handleChoiceChange(e.target.value)}>\n          {this.state.characterChoiceNumbers.map(choice => <option key={choice}>{choice}</option>)}\n        </select>\n        <CharacterInfoPage chosenChoiceNumber={this.state.chosenChoiceNumber}/>\n      </div>\n    )\n  }\n}\n\nexport default App;"
    },
    {
      type: "paragraph",
      text: "Với React Hooks, đoạn code trên có thể được viết lại ngắn gọn hơn bằng useState:"
    },
    {
      type: "code",
      language: "javascript",
      code: "import React, { useState } from 'react';\nimport CharacterInfoPage from './CharacterInfoPage';\n\nconst App = () => {\n  const [characterChoiceNumbers, setCharacterChoiceNumbers] = useState([1,2,3,4,5]);\n  const [chosenChoiceNumber, setChosenChoiceNumber] = useState(1);\n\n  const handleChoiceChange = (newNumber) => {\n    setChosenChoiceNumber(newNumber);\n  }\n\n  return(\n    <div>\n      <select onChange={(e) => handleChoiceChange(e.target.value)}>\n        {characterChoiceNumbers.map(choice => <option key={choice}>{choice}</option>)}\n      </select>\n      <CharacterInfoPage chosenChoiceNumber={chosenChoiceNumber}/>\n    </div>\n  );\n}\n\nexport default App;"
    },
    {
      type: "paragraph",
      text: "Hook useState cho phép bạn khai báo state và hàm thay đổi state ngay trong functional component. Cú pháp useState() trả về một mảng gồm hai phần tử: giá trị hiện tại và hàm cập nhật giá trị đó."
    },
    {
      type: "paragraph",
      text: "Lưu ý: mỗi lần gọi hàm set state, giá trị cũ sẽ bị thay thế hoàn toàn. Vì vậy, nếu component có nhiều phần của state khác nhau, bạn nên gọi useState nhiều lần thay vì gom tất cả vào một object."
    },

    { type: "heading", text: "2. Lifecycle Methods với useEffect" },
    {
      type: "paragraph",
      text: "Trong class component, ta thường dùng các phương thức như componentDidMount và componentDidUpdate để xử lý side effects như gọi API hoặc cập nhật dữ liệu. Trong functional component, điều này được thay thế bằng useEffect."
    },
    {
      type: "code",
      language: "javascript",
      code: "import React, { Component } from 'react';\n\nexport default class CharacterInfoPage extends Component {\n  state = { characterObject: {} };\n\n  componentDidMount() {\n    fetch(`https://swapi.dev/api/people/${this.props.chosenChoiceNumber}`)\n      .then(resp => resp.json())\n      .then(data => this.setState({ characterObject: data }));\n  }\n\n  componentDidUpdate(prevProps) {\n    if (prevProps.chosenChoiceNumber !== this.props.chosenChoiceNumber) {\n      fetch(`https://swapi.dev/api/people/${this.props.chosenChoiceNumber}`)\n        .then(resp => resp.json())\n        .then(data => this.setState({ characterObject: data }));\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        {Object.keys(this.state.characterObject).length !== 0 ? (\n          <h1>{this.state.characterObject.name}</h1>\n        ) : (\n          <h1>Loading...</h1>\n        )}\n      </div>\n    );\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Cùng đoạn code trên có thể được viết lại bằng Hooks như sau:"
    },
    {
      type: "code",
      language: "javascript",
      code: "import React, { useState, useEffect } from 'react';\n\nconst CharacterInfoPage = (props) => {\n  const [characterObject, setCharacterObject] = useState({});\n\n  // Tương đương componentDidMount\n  useEffect(() => {\n    fetch(`https://swapi.dev/api/people/${props.chosenChoiceNumber}`)\n      .then(resp => resp.json())\n      .then(data => setCharacterObject(data));\n  }, []);\n\n  // Tương đương componentDidUpdate\n  useEffect(() => {\n    fetch(`https://swapi.dev/api/people/${props.chosenChoiceNumber}`)\n      .then(resp => resp.json())\n      .then(data => setCharacterObject(data));\n  }, [props.chosenChoiceNumber]);\n\n  return (\n    <div>\n      {Object.keys(characterObject).length !== 0 ? (\n        <h1>{characterObject.name}</h1>\n      ) : (\n        <h1>Loading...</h1>\n      )}\n    </div>\n  );\n}\n\nexport default CharacterInfoPage;"
    },
    {
      type: "paragraph",
      text: "Hook useEffect giúp bạn xử lý các side effects như fetch dữ liệu, cập nhật DOM, hoặc thao tác với API. Nó nhận hai tham số: một hàm callback (thực thi sau mỗi lần render) và một mảng dependencies (xác định khi nào callback được chạy lại)."
    },

    { type: "heading", text: "3. Tránh vòng lặp vô hạn với useEffect" },
    {
      type: "paragraph",
      text: "Nếu không truyền mảng dependencies, useEffect sẽ chạy sau mỗi lần render, dễ dẫn đến vòng lặp vô hạn nếu trong callback có thay đổi state. Do đó, bạn nên chỉ định rõ dependencies hoặc truyền mảng rỗng nếu chỉ muốn chạy một lần sau khi component mount."
    },

    { type: "heading", text: "4. So sánh với các phương thức vòng đời" },
    {
      type: "list",
      items: [
        "useEffect với mảng rỗng [] tương đương componentDidMount.",
        "useEffect có dependencies tương đương componentDidUpdate.",
        "Cleanup function bên trong useEffect tương đương componentWillUnmount."
      ]
    },

    { type: "heading", text: "Kết luận" },
    {
      type: "paragraph",
      text: "React Hooks mang lại cách tiếp cận hiện đại, ngắn gọn và linh hoạt hơn trong việc quản lý state và vòng đời component. Tuy nhiên, bạn cần tuân thủ một số quy tắc cơ bản như không gọi Hooks trong vòng lặp, điều kiện hoặc hàm lồng nhau. Hooks phải được gọi ở cấp cao nhất của component để đảm bảo thứ tự thực thi chính xác."
    },
    {
      type: "paragraph",
      text: "Nếu hiểu đúng và sử dụng hợp lý, useState và useEffect sẽ giúp code React của bạn sạch hơn, dễ bảo trì và dễ mở rộng hơn nhiều so với class components truyền thống."
    }
  ]
},

  // 7️⃣ JPA & Hibernate
{
  id: "jpa-hibernate",
  category: "Java",
  title: "JPA và Hibernate: Quản lý database trong Java",
  description:
    "Hiểu cách JPA và Hibernate ánh xạ đối tượng Java sang bảng dữ liệu SQL, giúp thao tác với cơ sở dữ liệu dễ dàng và hiệu quả hơn.",
  date: "05/08/2024",
  readTime: "13 phút đọc",
  tags: ["Java", "JPA", "Hibernate"],
  link: "https://www.baeldung.com/hibernate-4-spring",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Trong Java, tương tác với cơ sở dữ liệu là nhiệm vụ thường xuyên. Viết trực tiếp SQL dễ gây khó bảo trì. JPA (Java Persistence API) và Hibernate giúp làm việc theo hướng đối tượng, giảm mã lặp và sai sót."
    },
    {
      type: "paragraph",
      text: "JPA là đặc tả (specification). Hibernate là một trong các implementation phổ biến nhất. Với Spring Boot, Spring Data JPA giúp thao tác JPA dễ dàng hơn."
    },

    { type: "heading", text: "1. JPA là gì?" },
    {
      type: "paragraph",
      text: "JPA là API chuẩn cho việc lưu trữ, truy xuất và quản lý dữ liệu giữa đối tượng Java và cơ sở dữ liệu quan hệ."
    },
    {
      type: "list",
      items: [
        "JPA là đặc tả, không phải framework.",
        "Cần implementation để chạy, ví dụ: Hibernate, EclipseLink, OpenJPA.",
        "Spring Data JPA cung cấp lớp trừu tượng để thao tác nhanh hơn."
      ]
    },

    { type: "heading", text: "2. Hibernate là gì?" },
    {
      type: "paragraph",
      text: "Hibernate là ORM framework ánh xạ lớp Java thành bảng dữ liệu, cung cấp cơ chế truy vấn, caching, lazy loading, transaction."
    },
    {
      type: "list",
      items: [
        "Tự động ánh xạ giữa class và bảng.",
        "Hỗ trợ cache, lazy loading, transaction, batch.",
        "Tích hợp tốt với Spring Boot."
      ]
    },

    { type: "heading", text: "3. Thành phần cốt lõi của JPA" },
    {
      type: "list",
      items: [
        "Entity: lớp Java ánh xạ với bảng.",
        "EntityManager: quản lý vòng đời entity và thao tác CRUD.",
        "Persistence Context: vùng nhớ theo dõi trạng thái entity.",
        "Repository (trong Spring Data): lớp trừu tượng hóa để thao tác dữ liệu nhanh."
      ]
    },

    { type: "heading", text: "4. Ví dụ Entity và Repository" },
    {
      type: "paragraph",
      text: "Ví dụ entity ánh xạ bảng users và repository tương ứng trong Spring Boot."
    },
    {
      type: "code",
      language: "java",
      code: "@Entity\n@Table(name = \"users\")\npublic class User {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n\n  private String name;\n  private String email;\n\n  @Column(name = \"created_at\")\n  private java.time.Instant createdAt = java.time.Instant.now();\n\n  // getters, setters\n}\n\npublic interface UserRepository extends org.springframework.data.jpa.repository.JpaRepository<User, Long> {\n  boolean existsByEmail(String email);\n}"
    },
    {
      type: "paragraph",
      text: "Với Spring Data JPA, chỉ cần khai báo interface, các truy vấn CRUD cơ bản sẽ được sinh tự động."
    },

    { type: "heading", text: "5. CRUD với EntityManager (không dùng Spring Data)" },
    {
      type: "paragraph",
      text: "Có thể thao tác dữ liệu trực tiếp bằng EntityManager."
    },
    {
      type: "code",
      language: "java",
      code: "@jakarta.persistence.PersistenceContext\nprivate jakarta.persistence.EntityManager entityManager;\n\npublic void createUser(User user) {\n  entityManager.persist(user);\n}\n\npublic User findUser(Long id) {\n  return entityManager.find(User.class, id);\n}\n\npublic void deleteUser(Long id) {\n  User user = entityManager.find(User.class, id);\n  if (user != null) {\n    entityManager.remove(user);\n  }\n}"
    },

    { type: "heading", text: "6. Quan hệ giữa các bảng (Relationships)" },
    {
      type: "paragraph",
      text: "JPA hỗ trợ OneToOne, OneToMany, ManyToOne, ManyToMany. Ví dụ quan hệ nhiều đơn hàng thuộc về một người dùng."
    },
    {
      type: "code",
      language: "java",
      code: "@Entity\npublic class Order {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n\n  private Double total;\n\n  @ManyToOne(fetch = FetchType.LAZY)\n  @JoinColumn(name = \"user_id\")\n  private User user;\n}"
    },
    {
      type: "paragraph",
      text: "Sử dụng FetchType.LAZY để trì hoãn tải dữ liệu liên kết đến khi cần, giúp tối ưu hiệu năng."
    },

    { type: "heading", text: "7. Transaction và Persistence Context" },
    {
      type: "paragraph",
      text: "Khi gọi persist, merge, remove, JPA quản lý thay đổi trong Persistence Context và ghi xuống database khi transaction commit."
    },
    {
      type: "code",
      language: "java",
      code: "@org.springframework.transaction.annotation.Transactional\npublic void updateEmail(Long id, String newEmail) {\n  User user = entityManager.find(User.class, id);\n  if (user != null) {\n    user.setEmail(newEmail);\n  }\n  // Thay đổi sẽ được đồng bộ khi transaction kết thúc\n}"
    },

    { type: "heading", text: "8. Ưu điểm và nhược điểm" },
    {
      type: "list",
      items: [
        "Ưu điểm: giảm mã SQL thủ công, dễ bảo trì, tích hợp tốt với Spring, hỗ trợ transaction và cache.",
        "Nhược điểm: cần hiểu cơ chế để tránh lỗi hiệu năng, có nguy cơ N+1 query nếu cấu hình fetch không phù hợp."
      ]
    },

    { type: "heading", text: "9. Best Practices" },
    {
      type: "list",
      items: [
        "Dùng DTO hoặc Projection khi trả dữ liệu ra API để tránh tải dư.",
        "Đặt @Transactional đúng phạm vi nghiệp vụ.",
        "Tránh truy vấn trong vòng lặp để không phát sinh N+1 query.",
        "Bật show_sql và format_sql khi debug, tắt trong môi trường production.",
        "Cân nhắc dùng fetch join hoặc EntityGraph cho truy vấn nhiều quan hệ."
      ]
    },

    { type: "heading", text: "Kết luận" },
    {
      type: "paragraph",
      text: "JPA và Hibernate giúp thao tác cơ sở dữ liệu theo hướng đối tượng, giảm mã lặp và nâng cao khả năng bảo trì. Hãy nắm vững entity, repository, quan hệ giữa các bảng, transaction và lazy loading để xây dựng ứng dụng hiệu quả."
    }
  ]
},

  // 8️⃣ Closure và Scope
{
  id: "js-scope-closures",
  category: "JavaScript",
  title: "Hiểu rõ Scope và Closure trong JavaScript",
  description:
    "Giải thích dễ hiểu về phạm vi biến (scope) trong JavaScript và cách closure hoạt động — nền tảng quan trọng giúp bạn hiểu sâu về ngôn ngữ này.",
  date: "18/10/2024",
  readTime: "10 phút đọc",
  tags: ["JavaScript", "Scope", "Closures"],
  link: "https://css-tricks.com/javascript-scope-closures/",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Trong JavaScript, phạm vi (scope) xác định nơi mà các biến có thể được truy cập. Hiểu rõ scope giúp bạn viết code sạch, tránh lỗi xung đột tên biến, và nắm vững cách hoạt động của closure. Bài viết này sẽ hướng dẫn bạn từ phạm vi toàn cục (global) đến phạm vi khối (block) và cách closure tận dụng các scope này.",
    },

    { type: "heading", text: "Phạm vi toàn cục (Global Scope)" },
    {
      type: "paragraph",
      text: "Nếu một biến được khai báo bên ngoài tất cả các hàm hoặc cặp dấu ngoặc nhọn {}, biến đó được xem là nằm trong phạm vi toàn cục. Biến toàn cục có thể được truy cập từ bất kỳ đâu trong chương trình.",
    },
    {
      type: "code",
      language: "javascript",
      code: "const greeting = 'Xin chào bạn đọc CSS-Tricks!';\n\nfunction sayHello() {\n  console.log(greeting);\n}\n\nconsole.log(greeting); // 'Xin chào bạn đọc CSS-Tricks!'\nsayHello(); // 'Xin chào bạn đọc CSS-Tricks!'",
    },
    {
      type: "paragraph",
      text: "Mặc dù bạn có thể khai báo biến toàn cục, nhưng không nên lạm dụng. Biến toàn cục dễ gây xung đột tên và làm code khó bảo trì.",
    },
    {
      type: "code",
      language: "javascript",
      code: "// Không nên làm thế này!\nlet thing = 'something';\nlet thing = 'something else'; // ❌ Lỗi, trùng tên biến\n\n// Với var thì nguy hiểm hơn vì không báo lỗi\nvar item = 'A';\nvar item = 'B'; // Ghi đè biến trước đó mà không biết\nconsole.log(item); // 'B'",
    },

    { type: "heading", text: "Phạm vi cục bộ (Local Scope)" },
    {
      type: "paragraph",
      text: "Biến chỉ có thể được sử dụng trong một phần nhất định của code được gọi là biến cục bộ. Có hai loại phạm vi cục bộ trong JavaScript: phạm vi hàm (function scope) và phạm vi khối (block scope).",
    },

    { type: "heading", text: "1. Function Scope (Phạm vi hàm)" },
    {
      type: "paragraph",
      text: "Khi bạn khai báo biến bên trong một hàm, nó chỉ tồn tại và có thể được truy cập trong chính hàm đó.",
    },
    {
      type: "code",
      language: "javascript",
      code: "function sayHello() {\n  const message = 'Xin chào bạn đọc!';\n  console.log(message);\n}\n\nsayHello(); // 'Xin chào bạn đọc!'\nconsole.log(message); // ❌ Lỗi: message is not defined",
    },

    { type: "heading", text: "2. Block Scope (Phạm vi khối)" },
    {
      type: "paragraph",
      text: "Khi sử dụng const hoặc let, biến được khai báo trong dấu {} chỉ tồn tại trong chính khối đó.",
    },
    {
      type: "code",
      language: "javascript",
      code: "{ \n  const hello = 'Xin chào bạn đọc CSS-Tricks!';\n  console.log(hello); // 'Xin chào bạn đọc CSS-Tricks!'\n}\n\nconsole.log(hello); // ❌ Lỗi: hello is not defined",
    },

    { type: "heading", text: "Hoisting trong hàm và phạm vi" },
    {
      type: "paragraph",
      text: "Khi bạn khai báo hàm bằng function declaration, JavaScript sẽ hoist (đưa hàm lên đầu phạm vi) — nghĩa là bạn có thể gọi hàm trước khi định nghĩa nó.",
    },
    {
      type: "code",
      language: "javascript",
      code: "sayHi(); // ✅ Hoạt động bình thường\n\nfunction sayHi() {\n  console.log('Xin chào bạn đọc!');\n}",
    },
    {
      type: "paragraph",
      text: "Tuy nhiên, khi dùng function expression, hoisting không xảy ra:",
    },
    {
      type: "code",
      language: "javascript",
      code: "sayHi(); // ❌ Lỗi: Cannot access 'sayHi' before initialization\n\nconst sayHi = function() {\n  console.log('Xin chào!');\n};",
    },

    { type: "heading", text: "Các hàm không chia sẻ scope với nhau" },
    {
      type: "paragraph",
      text: "Hai hàm độc lập không thể truy cập biến của nhau, trừ khi một hàm nằm trong hàm kia:",
    },
    {
      type: "code",
      language: "javascript",
      code: "function first() {\n  const msg = 'Tôi thuộc về hàm đầu tiên';\n}\n\nfunction second() {\n  first();\n  console.log(msg); // ❌ Lỗi: msg is not defined\n}",
    },

    { type: "heading", text: "Phạm vi lồng nhau (Nested Scope) và Lexical Scoping" },
    {
      type: "paragraph",
      text: "Khi bạn khai báo một hàm trong hàm khác, hàm bên trong có thể truy cập biến của hàm bên ngoài. Đây được gọi là lexical scoping.",
    },
    {
      type: "code",
      language: "javascript",
      code: "function outerFunction() {\n  const outer = 'Tôi là hàm ngoài';\n\n  function innerFunction() {\n    const inner = 'Tôi là hàm trong';\n    console.log(outer); // ✅ Có thể truy cập biến outer\n  }\n\n  console.log(inner); // ❌ Lỗi: inner is not defined\n}",
    },
    {
      type: "paragraph",
      text: "Bạn có thể hình dung phạm vi như tấm gương một chiều: hàm bên trong có thể nhìn thấy bên ngoài, nhưng bên ngoài không thể nhìn thấy bên trong.",
    },

    { type: "heading", text: "Closures – Khi phạm vi trở nên mạnh mẽ" },
    {
      type: "paragraph",
      text: "Mỗi khi bạn tạo hàm bên trong một hàm khác, bạn đã tạo ra closure. Closure cho phép hàm con ghi nhớ và truy cập biến của hàm cha — ngay cả khi hàm cha đã kết thúc.",
    },
    {
      type: "code",
      language: "javascript",
      code: "function outerFunction() {\n  const outer = 'Tôi thấy biến bên ngoài!';\n  function innerFunction() {\n    console.log(outer);\n  }\n  return innerFunction;\n}\n\nouterFunction()(); // 'Tôi thấy biến bên ngoài!'",
    },

    { type: "heading", text: "Ứng dụng của closure" },
    {
      type: "list",
      items: [
        "1️⃣ Kiểm soát side effects – Dùng closure để trì hoãn hoặc điều khiển hành vi bất đồng bộ (ví dụ: timeout, AJAX).",
        "2️⃣ Tạo biến riêng tư (private variables) – Giữ cho dữ liệu không thể bị truy cập từ bên ngoài.",
      ],
    },
    {
      type: "code",
      language: "javascript",
      code: "function prepareCake(flavor) {\n  return function() {\n    setTimeout(() => console.log(`Đã làm bánh vị ${flavor}!`), 1000);\n  };\n}\n\nconst makeCakeLater = prepareCake('chuối');\nmakeCakeLater(); // 1 giây sau: 'Đã làm bánh vị chuối!'",
    },

    { type: "heading", text: "Private variables bằng closure" },
    {
      type: "paragraph",
      text: "Closure có thể giữ biến riêng tư, chỉ cho phép truy cập qua hàm được trả về.",
    },
    {
      type: "code",
      language: "javascript",
      code: "function secret(code) {\n  return {\n    reveal() {\n      console.log(code);\n    }\n  };\n}\n\nconst mySecret = secret('CSS Tricks thật tuyệt vời!');\nmySecret.reveal(); // 'CSS Tricks thật tuyệt vời!'",
    },

    { type: "heading", text: "Debug scope bằng DevTools" },
    {
      type: "paragraph",
      text: "Bạn có thể dùng debugger trong Chrome hoặc Firefox để kiểm tra biến trong scope hiện tại.",
    },
    {
      type: "code",
      language: "javascript",
      code: "function prepareCake(flavor) {\n  debugger; // Tạm dừng chương trình ở đây\n  return function() {\n    setTimeout(() => console.log(`Làm bánh vị ${flavor}`), 1000);\n  };\n}",
    },

    { type: "heading", text: "Tổng kết" },
    {
      type: "list",
      items: [
        "✅ Biến được khai báo trong hàm chỉ tồn tại trong phạm vi hàm đó.",
        "✅ Hàm con có thể truy cập biến của hàm cha (closure).",
        "✅ Dùng closure để tạo biến riêng tư hoặc kiểm soát hiệu ứng phụ.",
        "✅ Tránh tạo biến toàn cục không cần thiết.",
        "✅ Dùng DevTools để quan sát scope và closure khi debug.",
      ],
    },
    {
      type: "paragraph",
      text: "Hiểu rõ scope và closure giúp bạn trở thành lập trình viên JavaScript giỏi hơn — vì gần như mọi khái niệm nâng cao (callback, async, React hooks, v.v.) đều dựa trên chúng.",
    },
  ],
},

  // 9️⃣ Exception Handling
{
  id: "java-exception-best-practices",
  category: "Java",
  title: "Xử lý Exception đúng cách trong Java",
  description:
    "Tổng hợp nguyên tắc và ví dụ giúp bạn xử lý exception hiệu quả, rõ ràng, dễ bảo trì – kỹ năng quan trọng cho mọi lập trình viên Java.",
  date: "20/07/2024",
  readTime: "12 phút đọc",
  tags: ["Java", "Exception Handling"],
  link: "https://viblo.asia/p/xu-ly-exception-dung-cach-trong-java-obA46OxGJKv",
  content: [
    { type: "heading", text: "Giới thiệu" },
    {
      type: "paragraph",
      text: "Xử lý exception một cách đúng đắn là phần quan trọng của việc viết code chất lượng trong Java, giúp đảm bảo tính ổn định và dễ bảo trì ứng dụng. Việc xử lý exception không chỉ giúp ứng dụng mạnh mẽ hơn mà còn giúp bạn dễ dàng theo dõi, phát hiện và sửa lỗi. Dưới đây là các nguyên tắc, ví dụ và hướng dẫn cụ thể mà bất kỳ lập trình viên nào cũng cần nắm vững.",
    },

    { type: "heading", text: "A. Tổng quan về Exception" },
    {
      type: "paragraph",
      text: "Theo Sun Microsystem, exception trong Java chia thành 3 loại chính: Checked Exception, Unchecked Exception và Error.",
    },
    {
      type: "list",
      items: [
        "**1. Checked Exception** – Xảy ra do nguyên nhân ngoài tầm kiểm soát của lập trình viên (ví dụ: lỗi file, cơ sở dữ liệu). Được kiểm tra tại compile-time. Bao gồm: IOException, SQLException, ClassNotFoundException,...",
        "**2. Unchecked Exception** – Xảy ra tại runtime, thường do lỗi logic lập trình. Bao gồm: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException,...",
        "**3. Error** – Những lỗi nghiêm trọng vượt ngoài khả năng kiểm soát của lập trình viên. Ví dụ: OutOfMemoryError, VirtualMachineError, AssertionError,...",
      ],
    },

    { type: "heading", text: "B. Xử lý Exception sao cho đúng" },

    { type: "heading", text: "1. Sử dụng try-catch block" },
    {
      type: "paragraph",
      text: "Cấu trúc `try-catch` giúp bạn xử lý ngoại lệ mà không để chương trình dừng đột ngột. Đây là phương pháp cơ bản nhất để đảm bảo luồng xử lý an toàn.",
    },
    {
      type: "code",
      language: "java",
      code: `try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Lỗi chia cho 0: " + e.getMessage());
}`,
    },

    { type: "heading", text: "2. Throwing Exceptions" },
    {
      type: "paragraph",
      text: "Khi một điều kiện lỗi xảy ra, bạn có thể ném (throw) một exception để báo cho tầng gọi biết. Từ khóa `throw` được dùng để ném ra exception trong runtime.",
    },
    {
      type: "code",
      language: "java",
      code: `public void validateAge(int age) {
  if (age < 18) {
    throw new IllegalArgumentException("Tuổi phải từ 18 trở lên");
  }
}`,
    },

    { type: "heading", text: "3. Tạo và sử dụng Custom Exceptions" },
    {
      type: "paragraph",
      text: "Bạn có thể tạo các loại exception riêng phản ánh rõ ngữ cảnh lỗi trong ứng dụng của mình. Custom exception giúp code dễ đọc và dễ bảo trì hơn.",
    },
    {
      type: "code",
      language: "java",
      code: `// Checked custom exception
public class InvalidDataException extends Exception {
  public InvalidDataException(String message) {
    super(message);
  }
}

// Unchecked custom exception
public class BusinessException extends RuntimeException {
  public BusinessException(String message) {
    super(message);
  }
}`,
    },
    {
      type: "paragraph",
      text: "Ví dụ sử dụng custom exception:",
    },
    {
      type: "code",
      language: "java",
      code: `public void performOperation(String input) throws InvalidDataException {
  if (input == null || input.isEmpty()) {
    throw new InvalidDataException("Dữ liệu đầu vào không hợp lệ");
  }
}

public static void main(String[] args) {
  try {
    performOperation("");
  } catch (InvalidDataException e) {
    System.err.println("Lỗi: " + e.getMessage());
  }
}`,
    },

    { type: "heading", text: "4. Tránh 'Swallowing' Exception" },
    {
      type: "paragraph",
      text: "“Swallowing” exception nghĩa là bạn bắt lỗi nhưng không xử lý hoặc không thông báo gì — điều này khiến lỗi bị ẩn đi và chương trình có thể tiếp tục ở trạng thái không ổn định.",
    },
    {
      type: "code",
      language: "java",
      code: `try {
  FileReader reader = new FileReader("file.txt");
} catch (IOException e) {
  // Không làm gì cả ❌
}

// Nên:
catch (IOException e) {
  e.printStackTrace(); // hoặc log lại
  System.err.println("Không thể đọc file: " + e.getMessage());
}`,
    },

    { type: "heading", text: "5. Logging thông tin Exception" },
    {
      type: "paragraph",
      text: "Luôn sử dụng hệ thống logging (như Log4j, SLF4J) để ghi lại lỗi thay vì chỉ `printStackTrace()`. Việc log giúp dễ dàng theo dõi và phân tích sau này.",
    },
    {
      type: "code",
      language: "java",
      code: `private static final Logger logger = LoggerFactory.getLogger(MyService.class);

try {
  processFile();
} catch (IOException e) {
  logger.error("Lỗi khi đọc file config: {}", e.getMessage(), e);
}`,
    },

    { type: "heading", text: "6. Không bao gồm quá nhiều mã trong một try block" },
    {
      type: "paragraph",
      text: "Giữ khối `try` càng nhỏ càng tốt — chỉ bao gồm những đoạn code có thể gây exception. Điều này giúp xác định chính xác đoạn lỗi và dễ xử lý hơn.",
    },

    { type: "heading", text: "7. Sử dụng finally block cho dọn dẹp tài nguyên" },
    {
      type: "paragraph",
      text: "`finally` luôn được thực thi dù có hay không xảy ra exception. Thường dùng để đóng tài nguyên như file, kết nối DB, socket,…",
    },
    {
      type: "code",
      language: "java",
      code: `FileReader reader = null;
try {
  reader = new FileReader("data.txt");
  // xử lý file
} catch (IOException e) {
  System.out.println("Lỗi đọc file: " + e.getMessage());
} finally {
  if (reader != null) {
    reader.close();
  }
}`,
    },

    { type: "heading", text: "8. Dùng try-with-resources cho tài nguyên an toàn" },
    {
      type: "paragraph",
      text: "`try-with-resources` (từ Java 7) giúp tự động đóng tài nguyên mà không cần finally, yêu cầu đối tượng phải implement `AutoCloseable` hoặc `Closeable`.",
    },
    {
      type: "code",
      language: "java",
      code: `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
  String line;
  while ((line = br.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  e.printStackTrace();
}`,
    },
    {
      type: "paragraph",
      text: "Bạn có thể khai báo nhiều tài nguyên trong cùng một khối `try` bằng dấu chấm phẩy:",
    },
    {
      type: "code",
      language: "java",
      code: `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"));
     BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"))) {
  // đọc và ghi đồng thời
}`,
    },

    { type: "heading", text: "9. Khi nào dùng Checked vs Unchecked Exception" },
    {
      type: "paragraph",
      text: "✅ **Checked Exception** – Dùng cho lỗi mà bạn có thể dự đoán và xử lý được, ví dụ: đọc file, truy vấn DB.  \n✅ **Unchecked Exception** – Dùng cho lỗi logic không thể hoặc không nên xử lý, ví dụ: NullPointerException, IllegalArgumentException.",
    },
    {
      type: "code",
      language: "java",
      code: `// Checked example
public void readFile(String path) throws IOException {
  Files.readString(Path.of(path));
}

// Unchecked example
public int divide(int a, int b) {
  if (b == 0) throw new ArithmeticException("Không thể chia cho 0");
  return a / b;
}`,
    },

    { type: "heading", text: "C. Tóm lại" },
    {
      type: "paragraph",
      text: "Việc xử lý exception đúng cách giúp ứng dụng ổn định, dễ bảo trì và đáng tin cậy hơn. Hãy nhớ:",
    },
    {
      type: "list",
      items: [
        "Luôn dùng exception cụ thể thay vì Exception tổng quát.",
        "Không nuốt lỗi – nếu không xử lý được, hãy log hoặc ném lại.",
        "Giữ khối try nhỏ và có mục đích rõ ràng.",
        "Sử dụng custom exception khi cần thể hiện logic nghiệp vụ riêng.",
        "Dùng try-with-resources để tự động quản lý tài nguyên.",
      ],
    },
    {
      type: "paragraph",
      text: "Một chiến lược exception rõ ràng giúp tăng tính ổn định và khả năng mở rộng của ứng dụng Java. Cảm ơn bạn đã đọc! 😄",
    },
  ],
},
];

export { services, technologies, experiences, testimonials, projects, certificates, blogs };

