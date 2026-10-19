# Research Compass — Soft Gripper Research Notebook

Một website mẫu dùng như **kim chỉ nam nghiên cứu**: câu hỏi trung tâm, các research directions, thư viện bài báo có lọc/tìm kiếm, ghi chú phương pháp, research gap tạm thời và lộ trình thí nghiệm.

> **Lưu ý:** Đây là website mẫu phục vụ thiết kế và tổ chức nghiên cứu; các ghi chú/pipeline là gợi ý, không khẳng định đây là kết quả hoặc tiến độ nghiên cứu đã hoàn thành.

## Cấu trúc

```text
research-compass/
├── index.html     # Nội dung trang, bố cục
├── styles.css     # Giao diện và responsive
├── data.js        # Dữ liệu bài báo / ghi chú — sửa file này thường xuyên
├── script.js      # Lọc, tìm kiếm và popup đọc ghi chú
├── favicon.svg    # Biểu tượng tab
├── .nojekyll      # GitHub Pages dùng static files
└── README.md
```

## Xem trang ngay trên máy

Mở trực tiếp `index.html` trong trình duyệt (không cần chạy server hoặc cài phần mềm). Hoặc chạy một web server:

```bash
python -m http.server 8000
```

và vào <http://localhost:8000>.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ **research-compass** (chọn **Public** nếu dùng gói GitHub Free).
2. Upload **các file bên trong** thư mục `research-compass`, đặc biệt cần `index.html` nằm ở root repository. Không chỉ tải file `.zip` lên nguyên dạng.
3. Mở **Settings → Pages** trong repository.
4. Ở **Build and deployment**, chọn **Deploy from a branch** → branch `main` → folder `/ (root)` → **Save**.
5. Website sẽ có địa chỉ dạng `https://TEN-USER.github.io/research-compass/` sau khi GitHub triển khai. Vào lại **Settings → Pages** để xem địa chỉ chính xác.

Nguồn hướng dẫn GitHub: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>.

## Thêm một bài báo

Mở `data.js`, thêm một object vào `window.PAPERS` bằng cách sao chép một mục đã có. Sửa các trường:

- `id`: tên ngắn không trùng nhau, ví dụ `paper-2026-01`.
- `title`, `authors`, `year`, `short`.
- `category`: một trong `tactile`, `sim2real`, `adaptation`, `simulation`.
- `label`, `description`: tên nhãn và tóm tắt một câu.
- `core`: ý tưởng bài báo.
- `relevance`: liên hệ trực tiếp với hướng nghiên cứu của bạn.
- `limitation`: giới hạn / vấn đề chưa kiểm chứng; tránh khẳng định quá mức.
- `experiment`: hành động cụ thể sau khi đọc.
- `url`: link arXiv, DOI, project hoặc mã nguồn (https).

Trang sẽ tự cập nhật các paper cards và bộ lọc. Nếu tạo chủ đề mới, nhớ thêm button filter vào `index.html` với `data-filter` trùng `category`.

## Thay đổi theo dự án của bạn

- `index.html`: chỉnh câu hỏi trung tâm, các research questions, Research Gap và Roadmap.
- `styles.css`: đổi bảng màu, font, spacing.
- `data.js`: thêm/sửa/xóa các paper notes.
- Dùng đường dẫn **tương đối** như `styles.css` để trang hoạt động trong GitHub Pages dạng project repository.
- Tránh đăng công khai tài liệu nội bộ, dữ liệu chưa công bố hoặc thông tin cá nhân nếu bạn chưa muốn chia sẻ.

## Ý tưởng mở rộng

- Từng paper có trang riêng bằng Markdown và link DOI/BibTeX.
- Nhật ký nghiên cứu theo ngày: decision → evidence → next experiment.
- Bảng phân biệt: **fact from paper** / **my interpretation** / **hypothesis to test**.
- Bản đồ nối paper với research questions, benchmark, simulation và hardware.
- Thêm ảnh/video prototype thật khi được phép công bố.

Website dùng HTML/CSS/JS thuần; không cần build, tài khoản trả phí hay backend.
