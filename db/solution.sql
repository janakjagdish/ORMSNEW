
--
CREATE DATABASE IF NOT EXISTS `solution` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `solution`;

-- --------------------------------------------------------




CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `filename` text NOT NULL,
  `dt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `filename`, `dt`) VALUES
(1, '127891663749328.txt', '2022-09-21 03:05:28'),
(2, '124161663749336.pdf', '2022-09-21 03:05:36');

-- --------------------------------------------------------

--
-- Table structure for table `product_child`
--

CREATE TABLE `product_child` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `version` varchar(111) NOT NULL,
  `md5sum` int(11) NOT NULL,
  `files` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_child`
--

INSERT INTO `product_child` (`id`, `pid`, `version`, `md5sum`, `files`) VALUES
(1, 2, 'A short description of Microsoft revenue 56', 25, 'myfile1.docx'),
(2, 2, 'A short description of Microsoft revenue ', 25, 'myfile2.pdf'),
(3, 1, 'Verson 1', 23, 'myfile3.txt');

-- --------------------------------------------------------

--
-- Table structure for table `product_parents`
--

CREATE TABLE `product_parents` (
  `pid` int(11) NOT NULL,
  `solution_version` varchar(111) NOT NULL,
  `status` varchar(111) NOT NULL,
  `number_of_items` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_parents`
--

INSERT INTO `product_parents` (`pid`, `solution_version`, `status`, `number_of_items`) VALUES
(1, 'REL-SOLUTION.5-G_NEC_OCP_HSC.01.23.345', 'Released ', 2),
(2, ' REL-SOLUTION.5-G_NEC_OCP_HSC.01.23.347 ', 'ALL product not stored or released ', 2);

-- --------------------------------------------------------



-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_child`
--
ALTER TABLE `product_child`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `product_parents`
--
ALTER TABLE `product_parents`
  ADD PRIMARY KEY (`pid`);

-- AUTO_INCREMENT for dumped tables
--


--
-- AUTO_INCREMENT for table `product_child`
--
ALTER TABLE `product_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_parents`
--
ALTER TABLE `product_parents`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `product_child`
  ADD CONSTRAINT `product_child_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `product_parents` (`pid`);
COMMIT;

