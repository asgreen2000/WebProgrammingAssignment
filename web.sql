-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2021 at 02:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `role` varchar(255) NOT NULL
) ;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`, `name`, `phoneNumber`, `role`) VALUES
(1, 'dat', '123456', 'dat@gmail.com', 'dat', '0909', 'Admin'),
(2, 'dat.bui197404648', '$2y$10$SKmUZnFz5F0nVGORzD9gY.Y9dkDzVa43f31ZEY50aszAGl6lCgm9a', 'buihuutiendat2017@gmail.com', 'Bùi Hữu Tiến Đạt', '+84353297204', 'Admin'),
(3, 'datbui123', '$2y$10$DnbJplpucY.X3KSNpu383ug2z43G/M9HC8DPak3H1uycaWx1mq7ay', 'buihamy222024@gmail.com', 'buidat', '+84353297204', 'Admin'),
(13, 'dat123', '$2y$10$qnnwJ9EddlnREkD8TV1Zm.kTXJ8uQZIcei7ACm7IOaq7t.tktpH4G', 'buihuutiendat22017@gmail.com', 'Bùi Hữu Tiến Đạt', '+84353297204', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `cName` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `subject` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `postTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `subject`, `image`, `postTime`) VALUES
(3, ' Meme coin - trò đùa tỷ USD trong thế giới tiền số', 'Trong thế giới tiền điện tử, hiện chưa có định nghĩa thống nhất về meme coin. Tuy nhiên, khi nhắc đến thuật ngữ này, nhiều người nghĩ đến những đồng lấy cảm hứng từ hình ảnh phổ biến trên Internet hoặc sự kiện diễn ra trong thực tế. Khác với các dự án tiền mã hoá nổi tiếng như Bitcoin, Ethereum, meme coin sinh ra với mục đích giải trí, không mang giá trị kỹ thuật nền tảng hay giải quyết bài toán nào trong cuộc sống. Phần lớn người chơi meme coin là để giải trí hoặc đầu cơ.\n\nTheo ông Trần Dinh, quản trị viên Diễn đàn Phổ cập Blockchain, meme coin bắt nguồn từ khi phí Ethereum ngày càng cao và nhiều người tìm cách tạo ra một coin mới theo mô hình giảm phát. \"Nhiều dự án tuyên bố thẳng rằng đây là coin dành cho cộng đồng. Họ tạo ra token để cộng đồng FOMO - những người sợ bị bỏ lỡ cơ hội - tự kêu gọi nhau tham gia. Hiện đa số sử dụng biểu tượng liên quan đến động vật như chó mèo, dê... nhưng trong tương lai, người ta có thể sử dụng bất kỳ hình tượng nào liên quan đến các trào lưu chế ảnh để đại diện cho một meme coin\", ông Dinh nói.', 'Công nghệ', 'https://i1-sohoa.vnecdn.net/2021/11/29/Shiba-9156-1638190859.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=fB_fFkSxIV3tEP8ZujyRAA', '2021-12-01'),
(4, 'Chuyên gia AI 37 tuổi thành CEO Twitter', 'Agrawal có chuyên môn về machine learning và AI, gia nhập Twitter vào tháng 10/2011 và chỉ sau thời gian ngắn, ông được chọn là kỹ sư xuất sắc của công ty. Tháng 10/2017, ông trở thành Giám đốc công nghệ Twitter, giải quyết nhiều vấn đề vĩ mô và mang tính chiến lược cho mạng xã hội, như khả năng bảo mật, quy định mật khẩu mới, phân quyền người dùng...\n\nAgrawal là người thứ tư nắm quyền điều hành cao nhất của Twitter, sau Dorsey (giai đoạn 2006-2008, 2015-2021), Evan Williams (2008-2010 ) và Dick Costolo (2010-2015). Ông cũng là một trong những lãnh đạo công ty công nghệ lớn trẻ nhất hiện nay với 37 tuổi, bằng tuổi của CEO Meta Mark Zuckerberg.\n\nTrong thời gian làm CTO, một trong những dự án lớn của Agrawal là giám sát Bluesky - nền tảng phi tập trung được công bố lần đầu vào tháng 12/2019. So với các mạng xã hội hiện nay, mạng phi tập trung có ưu thế hơn, chuyển trách nhiệm kiểm duyệt từ các kỹ sư và quản lý Twitter sang cơ sở người dùng rộng lớn trên Bluesky, theo Tech Crunch.\n\nMục tiêu của Bluesky là \"định hình một tiêu chuẩn mở và phi tập trung cho mạng truyền thông xã hội\". Đây có thể là tiền đề cho Twitter chuyển sang mô hình mới trong tương lai, đồng thời làm nền tảng cho một dự án thú cưng ảo khác của Dorsey.\n\nBluesky hiện phát triển một cách âm thầm, nhưng bắt đầu thu sự chú ý trong vài tháng qua. Vào tháng 8, nhà phát triển tiền điện tử Jay Graber đã được giao phụ trách Bluesky.\n\nTham vọng về một mạng xã hội phi tập trung còn được Agrawal thể hiện qua một dự án khác. Đầu tháng 11, nhóm Twitter Crypto được thành lập, do Tess Rinearson đứng đầu và hướng đến nền tảng Web3 - thế hệ thứ ba của Internet, tầm nhìn về một Internet thông minh không máy chủ với những website phi tập trung kết nối với nhau. Twitter Crypto liên kết với Bluesky, trong khi Rinearson sẽ báo cáo trực tiếp cho Agrawal.\n\nBên cạnh đó, Agrawal cũng đi đầu trong nỗ lực cải tiến công nghệ nội bộ. Từ 2018, ông đẩy nhanh tốc độ phát triển và triển khai các tính năng của Twitter. \"Khi ai đó phàn nàn Twitter hoạt động chậm, chúng tôi rất đau lòng và quyết tâm lấy đó làm động lực thay đổi\", Agrawal chia sẻ trên The Infomation đầu năm nay.\n\nThay vì bó hẹp trong máy chủ Twitter, ông bắt tay với các đối tác đám mây bên thứ ba như Google Cloud để xử lý dữ liệu, hay dự kiến di chuyển tính năng dòng thời gian lên dịch vụ lưu trữ Amazon Web Services vào 2023.\n\nKhi lên làm CEO, Agrawal sẽ đối mặt với một trong những thách thức lớn của Twitter: kiểm duyệt nội dung. Tuy nhiên, ông được cho là đã chuẩn bị cho vấn đề này từ trước.\n\nTrong cuộc phỏng vấn năm 2020 với MIT Technology Review, Agrawal nói vai trò của Twitter là xây dựng một nơi lành mạnh, cho phép mọi người chia sẻ bất cứ điều gì họ muốn. Nhưng điều đó không có nghĩa Twitter sẽ bỏ qua tất cả các thông tin sai lệch. Ông xem mục tiêu kiểm soát nền tảng để \"tránh các tác hại cụ thể mà thông tin sai lệch có thể gây ra\" thay vì \"cố gắng trở thành người phán xử điều gì là đúng hay sai trên Internet\".', 'Công nghệ', 'https://i1-sohoa.vnecdn.net/2021/11/30/61a501b4ee97950018841e48-jpeg-9121-1638243790.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=hM2B_ujFZr2axU0lf_RfIA', '2021-12-01'),
(5, 'Chàng trai bị bại não trở thành kỹ sư mạng cấp cao', 'Câu chuyện của Wanling đang trở thành chủ đề thu hút tại Trung Quốc. Trên Weibo, chủ đề \"chàng trai bị bại não trở thành kỹ sư mạng cao cấp\" trở thành từ khóa tìm kiếm nóng với hơn 46 triệu lượt đọc và hơn 1.000 lượt bình luận.\n\n\"Tôi đã thi CCIE hai lần nhưng đều thất bại. Rất khó vượt qua các bài kiểm tra. Không phải ngẫu nhiên tất cả kỹ sư mạng đều muốn chinh phục CCIE. Bạn không chỉ được công nhận là chuyên gia cao cấp ở quy mô toàn cầu mà lương của bạn cũng sẽ tăng đáng kể\", Hu Kan, kỹ sư tại một tập đoàn công nghệ lớn của Trung Quốc, bình luận.\n\nCCIE (Cisco Certified Internetwork Expert) là chứng chỉ cao cấp nhất của Cisco dành cho các chuyên gia về mạng, viễn thông. CCIE có một bài thi lý thuyết với 100 câu hỏi, phải hoàn thành trong hai giờ. Sau khi kết thúc phần lý thuyết, thí sinh có 18 tháng chuẩn bị cho phần thực hành. Họ sẽ phải cấu hình, sửa lỗi và nâng cấp hệ thống trong 8 tiếng.\n\nCác kỳ thi được tổ chức lần lượt tại 10 địa điểm trên toàn thế giới. Cisco khuyến cáo người đăng ký thi nên có ít nhất 3-5 năm kinh nghiệm trong hệ thống mạng.\n\nCứ hai năm một lần, kỹ sư đã được cấp chứng chỉ CCIE phải làm bài sát hạch. Nếu không vượt qua, chứng chỉ sẽ được xếp vào trạng thái \"treo\". Một năm sau, nếu vẫn không đủ điều kiện cấp lại, chứng chỉ sẽ bị thu hồi và kỹ sư sẽ phải thi lại từ đầu để lấy chứng chỉ.', 'Ngoài ', 'https://i1-sohoa.vnecdn.net/2021/11/30/Ky-su-bi-bai-nao-4226-1638265255.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=371GMZlPhqt4odTlgBztlA', '2021-12-01'),
(6, 'Facebook bị ép bán nền tảng chia sẻ ảnh GIF', 'Nhà chức trách lo ngại Meta, tên gọi mới của công ty Facebook, có thể khuyếch trương sức mạnh đáng kể của mình bằng cách hạn chế hoặc cấm các nền tảng khác truy cập ảnh GIF trên Giphy. Việc này sẽ tăng lưu lượng truy cập trên các nền tảng thuộc sở hữu của Meta như Facebook, WhatsApp và Instagram - vốn đã chiếm tới 73% tổng thời gian truy cập mạng xã hội ở Anh. Meta cũng có thể thay đổi các điều tiếp cận vào kho ảnh GIF trên Giphy, như sẽ yêu cầu TikTok, Twitter và Snapchat cung cấp nhiều dữ liệu từ người dùng hơn.\n\nMeta cho biết họ không đồng ý với quyết định trên và đang xem xét kháng cáo.\n\nTrước đó vào tháng 10, CMA cũng phạt Facebook 69,5 triệu USD vì \"cố ý từ chối cung cấp tất cả các thông tin được yêu cầu\" liên quan đến việc mua lại nền tảng ảnh động.\n\nTrước khi gia nhập Facebook vào tháng 5/2020, Giphy đã tung ra dịch vụ quảng cáo riêng. Họ cũng quảng bá cho các doanh nghiệp lớn như Dunkin\' thông qua ảnh GIF. Cơ quan quản lý nhận thấy các dịch vụ của nền tảng này có thể cạnh tranh được với Facebook, đồng thời khuyến khích các mạng xã hội và nhà quảng cáo khác đổi mới.\n\nNgay sau khi sát nhập, Facebook cho dừng dịch vụ quảng cáo của Giphy. CMA cho biết đây là quyết định đáng lo ngại, nhất là khi Facebook kiểm soát gần một nửa thị trường quảng cáo hiển thị trị giá 7 tỷ bảng Anh (9,4 tỷ USD) ở nước này.\n\nStuart McIntosh, đứng đầu nhóm điều tra, cho biết động thái của Facebook đã loại bỏ một đối thủ tiềm năng trên thị trường quảng cáo hiển thị hình ảnh. \"Do đó, bằng cách yêu cầu Facebook bán Giphy, chúng tôi đang bảo vệ hàng triệu người dùng mạng xã hội và thúc đẩy cạnh tranh và đổi mới trong quảng cáo kỹ thuật số\", McIntosh nói.\n\nTheo Financial Times, đây là lần đầu CMA cố gắng ngăn chặn một thương vụ sáp nhập đã hoàn tất của một gã khổng lồ công nghệ. Dù Meta có thể kháng cáo, quyết định của cơ quan quản lý của Anh đặt ra một tiền lệ đáng chú ý cho các giao dịch mua bán công nghệ lớn trong tương lai.', 'Công nghệ', 'https://i1-sohoa.vnecdn.net/2021/11/30/giphy-jpeg-4568-1634789938-4125-1638284533.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=myPl4iArC0pUqiJ959BGAg', '2021-12-01');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `pName` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `srcDetail` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `type` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL
) ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `pName`, `src`, `srcDetail`, `price`, `quantity`, `description`, `type`, `alt`) VALUES
(12, 'Acer Nitro 5 Gaming', 'https://cdn.tgdd.vn/Products/Images/44/247312/acer-nitro-5-gaming-an515-57-5831-i5-nhqdgsv003-1-org.jpg', 'https://cdn.tgdd.vn/Products/Images/44/247312/acer-nitro-5-gaming-an515-57-5831-i5-nhqdgsv003-1-org.jpg', 20000000, 2, 'Laptop Acer Nitro 5 Gaming AN515 57 5831 i5 (NH.QDGSV.003) là thế hệ laptop gaming mới của nhà Acer có nhiều thay đổi trong thiết kế. Hiệu năng vẫn giữ vững phong độ, tự tin mang đến cho game thủ trải nghiệm chơi game cực đã. ', 'Laptop', 'None'),
(13, 'Asus TUF Gaming FX516PE', 'https://cdn.tgdd.vn/Products/Images/44/239463/asus-tuf-gaming-fx516pe-i7-hn005t-1-org.jpg', 'https://cdn.tgdd.vn/Products/Images/44/239463/asus-tuf-gaming-fx516pe-i7-hn005t-1-org.jpg', 20000000, 200, '1', 'Laptop', 'None'),
(15, 'Pin sạc dự phòng không dây Polymer', 'https://cdn.tgdd.vn/Products/Images/57/229275/sac-du-phong-10000mah-khong-day-xmobile-p106wd-1-1-org.jpg', 'https://cdn.tgdd.vn/Products/Images/57/229275/sac-du-phong-10000mah-khong-day-xmobile-p106wd-1-1-org.jpg', 3000000, 2, 'Tạo thiện cảm mạnh nhờ thiết kế sang trọng, đường nét chi tiết đáng ngạc nhiên', 'Phụ kiện', 'None');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `userID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `rate` int(2) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`productID`,`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `FK_user_review_productID` FOREIGN KEY (`productID`) REFERENCES `product` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
