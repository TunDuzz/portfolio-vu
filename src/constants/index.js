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
    id: "work",
    title: "Work",
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    id: "java-collections",
    category: "Java",
    title: "Hiểu rõ về Java Collections Framework",
    description:
      "Tổng hợp các collection phổ biến như List, Set, Map và mẹo chọn đúng cấu trúc dữ liệu cho từng tình huống.",
    date: "15/09/2024",
    readTime: "8 phút đọc",
    tags: ["Java", "Collections"],
    link: "https://www.geeksforgeeks.org/collections-in-java/",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Java Collections Framework là nền tảng cho việc quản lý tập hợp dữ liệu trong Java. Thay vì phải tự viết các cấu trúc dữ liệu như mảng, danh sách, hàng đợi — Java cung cấp sẵn một hệ thống mạnh mẽ, có thể mở rộng và hiệu năng cao.",
      },
      { type: "heading", text: "Các nhóm chính" },
      {
        type: "list",
        items: [
          "Collection – interface gốc cho List, Set, Queue.",
          "List – lưu trữ phần tử có thứ tự, cho phép trùng lặp (ArrayList, LinkedList).",
          "Set – không cho phép trùng lặp (HashSet, TreeSet).",
          "Queue – xử lý theo cơ chế FIFO (PriorityQueue, LinkedList).",
          "Map – lưu cặp key–value (HashMap, TreeMap, LinkedHashMap).",
        ],
      },
      { type: "heading", text: "Ví dụ sử dụng" },
      {
        type: "code",
        language: "java",
        code: `import java.util.*;
public class CollectionsDemo {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Java");
    list.add("Spring");
    list.add("Java"); // cho phép trùng lặp

    Set<String> set = new HashSet<>(list);
    set.add("Hibernate");

    Map<String, Integer> scores = new HashMap<>();
    scores.put("Alice", 90);
    scores.put("Bob", 85);

    System.out.println(list);
    System.out.println(set);
    System.out.println(scores.get("Alice"));
  }
}`,
      },
      { type: "heading", text: "Khi nào dùng loại nào" },
      {
        type: "list",
        items: [
          "Dùng List khi cần giữ thứ tự và có thể trùng dữ liệu.",
          "Dùng Set khi cần loại bỏ phần tử trùng lặp.",
          "Dùng Map khi cần ánh xạ key–value (ví dụ: id → user).",
        ],
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Java Collections Framework giúp lập trình viên làm việc hiệu quả với dữ liệu phức tạp. Việc hiểu rõ các loại collection sẽ giúp bạn chọn cấu trúc phù hợp và tối ưu hiệu năng chương trình.",
      },
    ],
  },

  // 2️⃣ Arrow Functions và This Context
  {
    id: "js-arrow-this",
    category: "JavaScript",
    title: "JavaScript ES6+: Arrow Functions và This Context",
    description:
      "Hiểu rõ cách arrow function xử lý từ khóa this và khi nào nên dùng hoặc tránh dùng.",
    date: "10/09/2024",
    readTime: "6 phút đọc",
    tags: ["JavaScript", "ES6"],
    link: "https://www.freecodecamp.org/news/arrow-function-vs-regular-function-in-javascript/",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Arrow function trong ES6 không chỉ giúp code ngắn gọn hơn mà còn thay đổi cách `this` hoạt động. Bài viết này sẽ giúp bạn phân biệt sự khác biệt và hiểu rõ khi nào nên dùng.",
      },
      { type: "heading", text: "So sánh this trong function thường và arrow" },
      {
        type: "code",
        language: "javascript",
        code: `const obj = {
  name: "Alice",
  sayHi: function() {
    console.log(this.name);
  },
  sayHiArrow: () => {
    console.log(this.name);
  }
};
obj.sayHi();       // Alice
obj.sayHiArrow();  // undefined`,
      },
      {
        type: "paragraph",
        text: "`this` trong arrow function không bị ràng buộc tại runtime mà lấy từ lexical scope – tức là nơi hàm được định nghĩa.",
      },
      { type: "heading", text: "Ứng dụng thực tế" },
      {
        type: "code",
        language: "javascript",
        code: `function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
new Counter();`,
      },
      {
        type: "paragraph",
        text: "Nếu dùng function thường trong `setInterval`, `this` sẽ không trỏ đúng vào đối tượng Counter. Arrow function giúp khắc phục điều đó.",
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Arrow function lý tưởng cho callback và các tình huống cần giữ nguyên ngữ cảnh this. Tuy nhiên, đừng dùng nó cho method hoặc constructor.",
      },
    ],
  },

  // 3️⃣ Spring Boot REST API
  {
    id: "spring-boot-rest",
    category: "Java",
    title: "Spring Boot: Xây dựng RESTful API từ con số 0",
    description:
      "Tạo REST API với Spring Boot — từ khởi tạo project đến triển khai endpoints thực tế.",
    date: "05/09/2024",
    readTime: "12 phút đọc",
    tags: ["Java", "Spring Boot"],
    link: "https://www.baeldung.com/building-a-restful-web-service-with-spring-and-java",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Spring Boot giúp bạn tạo REST API nhanh chóng với ít cấu hình. Bài này hướng dẫn từng bước để xây dựng API CRUD hoàn chỉnh.",
      },
      { type: "heading", text: "Các bước cơ bản" },
      {
        type: "list",
        items: [
          "Khởi tạo dự án trên Spring Initializr.",
          "Thêm dependency: Spring Web, Spring Data JPA, H2 Database.",
          "Tạo entity, repository và controller.",
        ],
      },
      { type: "heading", text: "Ví dụ Controller" },
      {
        type: "code",
        language: "java",
        code: `@RestController
@RequestMapping("/api/users")
public class UserController {
  private final UserRepository repo;

  public UserController(UserRepository repo) {
    this.repo = repo;
  }

  @GetMapping
  public List<User> all() {
    return repo.findAll();
  }

  @PostMapping
  public User create(@RequestBody User user) {
    return repo.save(user);
  }
}`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Spring Boot giúp bạn triển khai REST API nhanh và dễ bảo trì. Khi đã hoàn thành, bạn có thể thêm Swagger hoặc Docker để mở rộng quy mô.",
      },
    ],
  },

  // 4️⃣ Async/Await
  {
    id: "async-await-js",
    category: "JavaScript",
    title: "Async/Await trong JavaScript: Viết code bất đồng bộ dễ đọc hơn",
    description:
      "Tìm hiểu cách async/await đơn giản hóa Promise chain và tránh callback hell.",
    date: "28/08/2024",
    readTime: "10 phút đọc",
    tags: ["JavaScript", "Async"],
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Async/await được giới thiệu trong ES8 giúp code bất đồng bộ trông giống như đồng bộ, dễ đọc và bảo trì hơn.",
      },
      { type: "heading", text: "Ví dụ trước và sau" },
      {
        type: "code",
        language: "javascript",
        code: `// Promise chain
fetch('/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function load() {
  try {
    const res = await fetch('/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
load();`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Async/await giúp code rõ ràng và dễ debug. Tuy nhiên, vẫn cần dùng try/catch để xử lý lỗi và tránh block song song với Promise.all.",
      },
    ],
  },

  // 5️⃣ Java Stream API
  {
    id: "java-stream-api",
    category: "Java",
    title: "Java Stream API: Xử lý dữ liệu hiệu quả",
    description:
      "Stream API giúp lập trình Java hiện đại hơn với phong cách functional, dễ đọc và gọn gàng.",
    date: "20/08/2024",
    readTime: "9 phút đọc",
    tags: ["Java", "Stream API"],
    link: "https://www.baeldung.com/java-8-streams",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Stream API cho phép thao tác dữ liệu dưới dạng pipeline – lọc, biến đổi, và tổng hợp dữ liệu mà không cần vòng lặp tường minh.",
      },
      { type: "heading", text: "Ví dụ" },
      {
        type: "code",
        language: "java",
        code: `List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);
int sum = numbers.stream()
  .filter(n -> n % 2 == 0)
  .mapToInt(n -> n * n)
  .sum();
System.out.println(sum); // 56`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Stream giúp code súc tích hơn nhưng không thay thế được mọi trường hợp. Hãy dùng khi cần xử lý dữ liệu dạng pipeline, tránh lạm dụng với logic phức tạp.",
      },
    ],
  },

  // 6️⃣ React Hooks
  {
    id: "react-hooks-useeffect",
    category: "JavaScript",
    title: "React Hooks: useState và useEffect",
    description:
      "Tìm hiểu cách hai hooks phổ biến nhất giúp React quản lý state và side effects.",
    date: "12/08/2024",
    readTime: "11 phút đọc",
    tags: ["JavaScript", "React"],
    link: "https://react.dev/reference/react/useEffect",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "`useState` quản lý trạng thái bên trong component, còn `useEffect` xử lý các side effects như gọi API hoặc lắng nghe sự kiện.",
      },
      { type: "heading", text: "Ví dụ cơ bản" },
      {
        type: "code",
        language: "javascript",
        code: `function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>+</button>;
}`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Kết hợp `useState` và `useEffect` là nền tảng cho mọi logic trong functional component React. Hiểu rõ dependencies sẽ giúp tránh render vô hạn.",
      },
    ],
  },

  // 7️⃣ JPA & Hibernate
  {
    id: "jpa-hibernate",
    category: "Java",
    title: "JPA và Hibernate: Quản lý database trong Java",
    description:
      "Hiểu rõ cách JPA và Hibernate ánh xạ đối tượng Java sang bảng dữ liệu SQL.",
    date: "05/08/2024",
    readTime: "13 phút đọc",
    tags: ["Java", "JPA"],
    link: "https://www.baeldung.com/hibernate-4-spring",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "JPA là đặc tả, còn Hibernate là implementation phổ biến nhất giúp ánh xạ dữ liệu giữa Java object và bảng trong cơ sở dữ liệu.",
      },
      { type: "heading", text: "Ví dụ entity" },
      {
        type: "code",
        language: "java",
        code: `@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String email;
}`,
      },
      { type: "heading", text: "Repository" },
      {
        type: "code",
        language: "java",
        code: `public interface UserRepo extends JpaRepository<User, Long> {
  boolean existsByEmail(String email);
}`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "JPA/Hibernate giúp giảm boilerplate code khi thao tác database. Tuy nhiên, cần chú ý lazy loading và hiệu suất khi truy vấn nhiều mối quan hệ.",
      },
    ],
  },

  // 8️⃣ Closure và Scope
  {
    id: "closure-scope-js",
    category: "JavaScript",
    title: "Closure và Scope trong JavaScript",
    description:
      "Giải mã cách JavaScript ghi nhớ biến qua closure và cách áp dụng tạo private state.",
    date: "28/07/2024",
    readTime: "7 phút đọc",
    tags: ["JavaScript", "Closures"],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Closure cho phép một hàm con truy cập biến trong phạm vi của hàm cha — ngay cả sau khi hàm cha đã kết thúc.",
      },
      { type: "heading", text: "Ví dụ" },
      {
        type: "code",
        language: "javascript",
        code: `function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Closure là khái niệm cốt lõi trong JS giúp mô phỏng private variables và tạo factory function linh hoạt.",
      },
    ],
  },

  // 9️⃣ Exception Handling
  {
    id: "java-exception-best-practices",
    category: "Java",
    title: "Xử lý Exception trong Java: Best Practices",
    description:
      "Học cách quản lý ngoại lệ hiệu quả với try-catch, custom exception và logging chuẩn.",
    date: "20/07/2024",
    readTime: "10 phút đọc",
    tags: ["Java", "Exception Handling"],
    link: "https://www.baeldung.com/java-exceptions",
    content: [
      { type: "heading", text: "Giới thiệu" },
      {
        type: "paragraph",
        text: "Exception là cơ chế xử lý lỗi mạnh mẽ trong Java. Tuy nhiên, việc dùng sai có thể khiến code khó bảo trì.",
      },
      { type: "heading", text: "Ví dụ sai và đúng" },
      {
        type: "code",
        language: "java",
        code: `try {
  int result = 10 / 0;
} catch (Exception e) {
  e.printStackTrace(); // Không nên
}

// Tốt hơn:
try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.err.println("Lỗi chia cho 0: " + e.getMessage());
}`,
      },
      { type: "heading", text: "Custom Exception" },
      {
        type: "code",
        language: "java",
        code: `public class UserNotFoundException extends RuntimeException {
  public UserNotFoundException(String id) {
    super("Không tìm thấy user với ID: " + id);
  }
}`,
      },
      { type: "heading", text: "Kết luận" },
      {
        type: "paragraph",
        text: "Hãy dùng exception cụ thể, log rõ ràng và tránh nuốt lỗi. Exception tốt giúp hệ thống ổn định và dễ debug hơn.",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, blogs };

