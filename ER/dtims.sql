SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `jiaxiao` ;
CREATE SCHEMA IF NOT EXISTS `jiaxiao` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `jiaxiao` ;

-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_access` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_access` (
  `role_id` SMALLINT(6) UNSIGNED NOT NULL ,
  `node_id` SMALLINT(6) UNSIGNED NOT NULL ,
  `level` TINYINT(1) NOT NULL ,
  `module` VARCHAR(50) NOT NULL DEFAULT '' ,
  INDEX `groupId` (`role_id` ASC) ,
  INDEX `nodeId` (`node_id` ASC) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_account`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_account` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_account` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '驾校ID' ,
  `name` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '驾校名称' ,
  `address` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '驾校地址' ,
  `char` VARCHAR(30) NOT NULL DEFAULT '''''' COMMENT '负责人' ,
  `phone` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系电话/必填，用于取回账号密码验证' ,
  `mobile` CHAR(11) NOT NULL DEFAULT '' COMMENT '手机/必填，用于取回账号密码验证' ,
  `email` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '安全邮箱，用于取回账号密码验证' ,
  `create_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '账号建立时间' ,
  `end_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '账号到期时间' ,
  `year_pay` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT '1000.00' COMMENT '年费' ,
  `score` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '积分' ,
  `discount` DOUBLE(2,1) UNSIGNED NOT NULL DEFAULT '1.0' COMMENT '折扣' ,
  `now_year_pay` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT '1000.00' COMMENT '当前年费' ,
  `last_pay_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '上次付款日期' ,
  `next_pay_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '下次应付款日期' ,
  `total_pay` DOUBLE(8,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '付款总额' ,
  `status` ENUM('-1','0','1') NOT NULL DEFAULT 1 COMMENT '账号状态：-1：删除，0：锁定，1：正常' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) )
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '驾校账号表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_bill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_bill` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_bill` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '账单序号' ,
  `aid` INT(10) UNSIGNED NOT NULL ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '付款时间' ,
  `money` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '付款金额' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `aid` (`aid` ASC) ,
  CONSTRAINT `fk_haran_bill_haran_account1`
    FOREIGN KEY (`aid` )
    REFERENCES `jiaxiao`.`haran_account` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '账单记录';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_sub`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_sub` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_sub` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '分部ID' ,
  `aid` INT(10) UNSIGNED NOT NULL ,
  `name` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '分部名称' ,
  `address` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '地址' ,
  `char` CHAR(10) NOT NULL DEFAULT '' COMMENT '负责人' ,
  `phone` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系电话' ,
  `mobile` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系手机' ,
  `start_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '加盟时间' ,
  `end_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '合同到期时间' ,
  `contactor` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '联系人' ,
  `contactor_phone` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系人电话' ,
  `contactor_mobile` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系人手机' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `aid` (`aid` ASC) ,
  CONSTRAINT `fk_haran_sub_haran_account1`
    FOREIGN KEY (`aid` )
    REFERENCES `jiaxiao`.`haran_account` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '分部表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_coach`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_coach` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_coach` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '学员ID' ,
  `sid` INT(10) UNSIGNED NOT NULL COMMENT '所属分校' ,
  `name` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '教练姓名' ,
  `phone` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系电话' ,
  `mobile` CHAR(11) NOT NULL DEFAULT '' COMMENT '手机' ,
  `address` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '家庭地址' ,
  `identity` CHAR(18) NOT NULL DEFAULT '' COMMENT '身份证号码' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `sid` (`sid` ASC) ,
  CONSTRAINT `sid_id`
    FOREIGN KEY (`sid` )
    REFERENCES `jiaxiao`.`haran_sub` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '教练表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_car`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_car` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_car` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '车辆ID' ,
  `sid` INT(10) UNSIGNED NOT NULL ,
  `uid` INT(10) UNSIGNED NOT NULL ,
  `num` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '车牌号码' ,
  `last_check_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '上次年检日期' ,
  `next_check_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '下次年检日期' ,
  `total_oil` DOUBLE(8,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '总油费' ,
  `total_repair` DOUBLE(8,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '总修理费' ,
  `oil_num` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '总加油次数' ,
  `repair_num` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '总修理次数' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `sid` (`sid` ASC) ,
  INDEX `uid` (`uid` ASC) ,
  CONSTRAINT `fk_haran_car_haran_sub1`
    FOREIGN KEY (`sid` )
    REFERENCES `jiaxiao`.`haran_sub` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_haran_car_haran_coach1`
    FOREIGN KEY (`uid` )
    REFERENCES `jiaxiao`.`haran_coach` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '车辆表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_coach_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_coach_type` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_coach_type` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL DEFAULT '' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '教练类型表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_exam_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_exam_type` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_exam_type` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '考试类型' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '考试类型表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_exam_plan`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_exam_plan` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_exam_plan` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '序号' ,
  `tid` INT UNSIGNED NOT NULL ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '考试时间' ,
  `num` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '参考人数' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `tid` (`tid` ASC) ,
  CONSTRAINT `fk_haran_exam_plan_haran_exam_type1`
    FOREIGN KEY (`tid` )
    REFERENCES `jiaxiao`.`haran_exam_type` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '考试计划表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_type` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_type` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '学车类型' ,
  PRIMARY KEY (`id`) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '学车类型表C1/B1';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_learner`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_learner` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_learner` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '学员ID' ,
  `sid` INT(10) UNSIGNED NOT NULL ,
  `typeid` INT(10) UNSIGNED NOT NULL ,
  `name` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '学员姓名' ,
  `phone` CHAR(11) NOT NULL DEFAULT '' COMMENT '联系电话' ,
  `address` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '家庭地址' ,
  `identity` CHAR(18) NOT NULL DEFAULT '' COMMENT '身份证号码' ,
  `temp_add` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '暂住地址' ,
  `temp_num` CHAR(12) NOT NULL DEFAULT '' COMMENT '暂住证号码' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `sid` (`sid` ASC) ,
  INDEX `typeid` (`typeid` ASC) ,
  CONSTRAINT `fk_haran_learner_haran_sub1`
    FOREIGN KEY (`sid` )
    REFERENCES `jiaxiao`.`haran_sub` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_haran_learner_haran_learner_type1`
    FOREIGN KEY (`typeid` )
    REFERENCES `jiaxiao`.`haran_type` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '学员表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_learner_coach`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_learner_coach` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_learner_coach` (
  `cid` INT(10) UNSIGNED NOT NULL ,
  `lid` INT(10) UNSIGNED NOT NULL ,
  `tid` INT(10) UNSIGNED NOT NULL ,
  INDEX `cid` (`cid` ASC) ,
  INDEX `lid` (`lid` ASC) ,
  INDEX `tid` (`tid` ASC) ,
  CONSTRAINT `fk_haran_learner_coach_haran_coach1`
    FOREIGN KEY (`cid` )
    REFERENCES `jiaxiao`.`haran_coach` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_haran_learner_coach_haran_learner1`
    FOREIGN KEY (`lid` )
    REFERENCES `jiaxiao`.`haran_learner` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_haran_learner_coach_haran_coach_type1`
    FOREIGN KEY (`tid` )
    REFERENCES `jiaxiao`.`haran_coach_type` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_learner_examplan`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_learner_examplan` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_learner_examplan` (
  `lid` INT(10) UNSIGNED NOT NULL ,
  `pid` INT(10) UNSIGNED NOT NULL ,
  INDEX `lid` (`lid` ASC) ,
  INDEX `pid` (`pid` ASC) ,
  CONSTRAINT `lid_id`
    FOREIGN KEY (`lid` )
    REFERENCES `jiaxiao`.`haran_learner` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_haran_learner_examplan_haran_exam_plan1`
    FOREIGN KEY (`pid` )
    REFERENCES `jiaxiao`.`haran_exam_plan` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_member` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_member` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户ID' ,
  `aid` INT(10) UNSIGNED NOT NULL ,
  `username` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '姓名' ,
  `realname` VARCHAR(20) NOT NULL DEFAULT '''''' ,
  `email` VARCHAR(60) NOT NULL DEFAULT '' COMMENT '邮箱地址/必填，用于取回密码' ,
  `password` VARCHAR(32) NOT NULL DEFAULT '' COMMENT '密码/md5加密' ,
  `status` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' ,
  `create_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '注册时间' ,
  `create_ip` CHAR(15) NOT NULL DEFAULT '0.0.0.0' COMMENT '注册IP' ,
  `last_login_time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '上次登录时间' ,
  `last_login_ip` CHAR(15) NOT NULL DEFAULT '0.0.0.0' COMMENT '上次登录IP' ,
  `login_times` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '登录次数' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `aid` (`aid` ASC) ,
  CONSTRAINT `fk_haran_member_haran_account1`
    FOREIGN KEY (`aid` )
    REFERENCES `jiaxiao`.`haran_account` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '用户表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_node`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_node` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_node` (
  `id` SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(20) NOT NULL ,
  `title` VARCHAR(50) NOT NULL DEFAULT '' ,
  `status` TINYINT(1) NOT NULL DEFAULT '0' ,
  `isdisplay` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' ,
  `remark` VARCHAR(255) NOT NULL DEFAULT '' ,
  `sort` SMALLINT(6) UNSIGNED NULL DEFAULT NULL ,
  `pid` SMALLINT(6) UNSIGNED NOT NULL ,
  `level` TINYINT(1) UNSIGNED NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `level` (`level` ASC) ,
  INDEX `pid` (`pid` ASC) ,
  INDEX `status` (`status` ASC) ,
  INDEX `name` (`name` ASC) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_oil`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_oil` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_oil` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `cid` INT(10) UNSIGNED NOT NULL ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '时间' ,
  `cost` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '费用' ,
  `status` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '审核:0-未审核,1-审核' ,
  `remark` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '事由' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `cid` (`cid` ASC) ,
  CONSTRAINT `fk_haran_oil_haran_car1`
    FOREIGN KEY (`cid` )
    REFERENCES `jiaxiao`.`haran_car` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '车辆加油记录';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_region`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_region` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_region` (
  `id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `pid` SMALLINT(5) UNSIGNED NOT NULL DEFAULT '0' ,
  `name` VARCHAR(120) NOT NULL DEFAULT '' ,
  `type` TINYINT(1) NOT NULL DEFAULT '2' ,
  PRIMARY KEY (`id`) )
AUTO_INCREMENT = 2858
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_repair`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_repair` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_repair` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `cid` INT(10) UNSIGNED NOT NULL ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '修理时间' ,
  `cost` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT '0.00' COMMENT '费用' ,
  `status` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '审核:0-未审核,1-审核' ,
  `remark` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '备注' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  INDEX `cid` (`cid` ASC) ,
  CONSTRAINT `fk_haran_repair_haran_car1`
    FOREIGN KEY (`cid` )
    REFERENCES `jiaxiao`.`haran_car` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '车辆修理记录';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_role` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_role` (
  `id` SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(20) NOT NULL ,
  `pid` SMALLINT(6) NULL DEFAULT NULL ,
  `status` TINYINT(1) UNSIGNED NULL DEFAULT NULL ,
  `remark` VARCHAR(255) NULL DEFAULT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `pid` (`pid` ASC) ,
  INDEX `status` (`status` ASC) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_role_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_role_user` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_role_user` (
  `role_id` MEDIUMINT(9) UNSIGNED NULL DEFAULT NULL ,
  `user_id` CHAR(32) NULL DEFAULT NULL ,
  INDEX `group_id` (`role_id` ASC) ,
  INDEX `user_id` (`user_id` ASC) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_exam_result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_exam_result` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_exam_result` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `lid` INT(10) UNSIGNED NOT NULL ,
  `pid` INT(10) UNSIGNED NOT NULL ,
  `score` TINYINT(1) NOT NULL DEFAULT -1 COMMENT '通过与否：0未通过，1通过，-1未录入' ,
  `times` TINYINT(4) UNSIGNED NOT NULL DEFAULT 1 COMMENT '考试次数' ,
  INDEX `lid` (`pid` ASC) ,
  INDEX `pid` (`lid` ASC) ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id` (`id` ASC) ,
  CONSTRAINT `fk_haran_learner_has_haran_exam_plan_haran_learner1`
    FOREIGN KEY (`lid` )
    REFERENCES `jiaxiao`.`haran_learner` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_haran_learner_has_haran_exam_plan_haran_exam_plan1`
    FOREIGN KEY (`pid` )
    REFERENCES `jiaxiao`.`haran_exam_plan` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '考试结果表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_payment` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_payment` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `lid` INT(10) UNSIGNED NOT NULL ,
  `money` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT 0.00 COMMENT '培训费' ,
  `exam` DOUBLE(6,2) UNSIGNED NOT NULL DEFAULT 0.00 COMMENT '考试费' ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '交费时间' ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  INDEX `lid` (`lid` ASC) ,
  CONSTRAINT `fk_haran_payment_haran_learner1`
    FOREIGN KEY (`lid` )
    REFERENCES `jiaxiao`.`haran_learner` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '学员交费记录表';


-- -----------------------------------------------------
-- Table `jiaxiao`.`haran_certificate`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jiaxiao`.`haran_certificate` ;

CREATE  TABLE IF NOT EXISTS `jiaxiao`.`haran_certificate` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  `lid` INT(10) UNSIGNED NOT NULL COMMENT '学员ID' ,
  `number` VARCHAR(45) NOT NULL DEFAULT '' COMMENT '证书编号' ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '到证日期' ,
  `receive` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '领证日期' ,
  PRIMARY KEY (`id`) ,
  INDEX `lid` (`lid` ASC) ,
  CONSTRAINT `fk_haran_certificate_haran_learner1`
    FOREIGN KEY (`lid` )
    REFERENCES `jiaxiao`.`haran_learner` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
COMMENT = '证书表';

USE `jiaxiao` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
