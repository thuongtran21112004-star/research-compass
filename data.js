/*
 * THƯ VIỆN BÀI BÁO — CHỈNH FILE NÀY ĐỂ THÊM/SỬA GHI CHÚ.
 * Các ghi chú hiện tại là MẪU ĐỊNH HƯỚNG, chưa phải bản tóm tắt do người sở hữu web xác nhận.
 * Để thêm paper: sao chép một object bên dưới, đổi id (không trùng), và sửa các trường.
 * Categories: tactile, sim2real, adaptation, simulation
 */
window.PAPERS = [
  {
    id: 'tactilerl',
    title: 'Sim2Real Manipulation on Unknown Objects with Tactile-based Reinforcement Learning',
    short: 'TactileRL',
    authors: 'Su et al.',
    year: '2024',
    category: 'tactile',
    label: 'TACTILE RL',
    description: 'RL với đầu vào visual tactile sensing trong simulation; đánh giá khả năng chuyển giao sang thao tác với vật thể chưa biết.',
    core: 'Nghiên cứu học chính sách thao tác từ tín hiệu tactile thị giác trong simulation, so sánh các tactile representations và đánh giá sim-to-real trên bài toán pivoting.',
    relevance: 'Đặt câu hỏi liệu một tín hiệu biến dạng có thể đóng vai trò observation hữu ích cho chính sách RL. Cần phân biệt cảm biến tactile chuyên dụng trong bài với camera quan sát đường viền bên trong gripper.',
    limitation: 'Paper không trực tiếp xác nhận rằng internal contour của gripper mềm, không nhìn thấy vật, có thể thay thế tín hiệu tactile. Đây là giả thuyết riêng cần kiểm tra.',
    experiment: 'Xác định benchmark grasping và các baselines: contour-only, proprioception-only và kết hợp; so sánh độ ổn định khi thay đổi ma sát / hình học vật.',
    url: 'https://arxiv.org/abs/2403.12170'
  },
  {
    id: 'transic',
    title: 'TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction',
    short: 'TRANSIC',
    authors: 'Jiang et al.',
    year: '2024',
    category: 'sim2real',
    label: 'SIM-TO-REAL',
    description: 'Human-in-the-loop corrections và residual policy nhằm khắc phục nhiều sai khác giữa simulation và robot thật.',
    core: 'Kết hợp chính sách học từ simulation với dữ liệu can thiệp / chỉnh sửa của con người trên robot thật để huấn luyện residual policy và cải thiện chuyển giao.',
    relevance: 'Gợi ý cách đặt vấn đề khi policy được huấn luyện trong môi trường mô phỏng chưa phản ánh đầy đủ contact và biến dạng thật.',
    limitation: 'Phương pháp sử dụng human correction và hệ quan sát riêng; chưa phải lời giải trực tiếp cho bài toán internal-contour-only soft gripper.',
    experiment: 'Trước tiên định lượng sim-to-real gap (tracking, contact, success rate); chỉ thử correction/adaptation nếu baseline transfer chưa đủ tốt.',
    url: 'https://arxiv.org/abs/2405.10315'
  },
  {
    id: 'rma2',
    title: 'Rapid Motor Adaptation for Robotic Manipulator Arms (RMA²)',
    short: 'RMA²',
    authors: 'Liang, Ellis & Henriques',
    year: '2024',
    category: 'adaptation',
    label: 'ADAPTATION',
    description: 'Khảo sát adaptation cho robot thao tác khi đặc tính vật thể và môi trường thay đổi, dựa trên quan sát và lịch sử hành động.',
    core: 'Mở rộng tư tưởng rapid motor adaptation sang robot manipulator, tìm cách thích nghi với thay đổi của vật thể và điều kiện thao tác.',
    relevance: 'Gợi ý khai thác chuỗi contour qua thời gian, thay vì chỉ dùng một ảnh đơn lẻ, để suy luận thông tin không quan sát trực tiếp.',
    limitation: 'Không được thiết kế đặc biệt cho hình học ngón gắp mềm và tín hiệu internal contour. Việc áp dụng cần thí nghiệm và so sánh riêng.',
    experiment: 'Thử so sánh observation từng frame với history window hoặc module adaptation nhỏ; kiểm tra khi thay đổi vật thể / độ cứng / ma sát.',
    url: 'https://arxiv.org/abs/2312.04670'
  },
  {
    id: 'mujoco',
    title: 'MuJoCo Flex: 2D Gripper Example',
    short: 'MuJoCo Flex',
    authors: 'Google DeepMind · Model reference (không phải paper)',
    year: 'Reference',
    category: 'simulation',
    label: 'SIMULATION',
    description: 'Mô hình tham khảo để tìm hiểu flex bodies, biến dạng và tương tác contact trong một gripper 2D.',
    core: 'File XML ví dụ về gripper_2d và hệ flex của MuJoCo; dùng làm tài liệu bắt đầu dựng mô hình, không phải bằng chứng mô phỏng sẽ đúng với gripper TPU 95A thực.',
    relevance: 'Điểm khởi đầu khả thi để thử va chạm, penetration, sai số hình học và tín hiệu contour trong một mô hình đơn giản.',
    limitation: 'Example chưa thay thế kiểm định thực nghiệm về stiffness, hysteresis, contact và real gripper geometry.',
    experiment: 'Thử load mô hình, kiểm tra mesh/contact và đo contour dưới 2–3 trường hợp tải; so sánh với video từ prototype.',
    url: 'https://github.com/google-deepmind/mujoco/blob/main/model/flex/gripper_2d.xml'
  }
];
