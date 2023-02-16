/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Generated by the CloudDB ObjectType compiler. DO NOT EDIT!
 */

class t_mall_user_addr {
    getFieldTypeMap() {
        let fieldTypeMap = new Map();
        fieldTypeMap.set('addr_id', 'Long');
        fieldTypeMap.set('uid', 'Long');
        fieldTypeMap.set('name', 'String');
        fieldTypeMap.set('phone', 'String');
        fieldTypeMap.set('post_code', 'String');
        fieldTypeMap.set('province', 'String');
        fieldTypeMap.set('city', 'String');
        fieldTypeMap.set('region', 'String');
        fieldTypeMap.set('detail_addr', 'String');
        fieldTypeMap.set('create_time', 'Date');
        fieldTypeMap.set('update_time', 'Date');
        fieldTypeMap.set('isdefault', 'Integer');
        return fieldTypeMap;
    }

    getClassName() {
        return 't_mall_user_addr';
    }

    getPrimaryKeyList() {
        let primaryKeyList = [];
        primaryKeyList.push('addr_id');
        return primaryKeyList;
    }

    getIndexList() {
        let indexList = [];
        return indexList;
    }

    getEncryptedFieldList() {
        let encryptedFieldList = [];
        return encryptedFieldList;
    }

    setAddr_id(addr_id) {
        this.addr_id = addr_id;
    }

    getAddr_id() {
        return this.addr_id;
    }

    setUid(uid) {
        this.uid = uid;
    }

    getUid() {
        return this.uid;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    setPost_code(post_code) {
        this.post_code = post_code;
    }

    getPost_code() {
        return this.post_code;
    }

    setProvince(province) {
        this.province = province;
    }

    getProvince() {
        return this.province;
    }

    setCity(city) {
        this.city = city;
    }

    getCity() {
        return this.city;
    }

    setRegion(region) {
        this.region = region;
    }

    getRegion() {
        return this.region;
    }

    setDetail_addr(detail_addr) {
        this.detail_addr = detail_addr;
    }

    getDetail_addr() {
        return this.detail_addr;
    }

    setCreate_time(create_time) {
        this.create_time = create_time;
    }

    getCreate_time() {
        return this.create_time;
    }

    setUpdate_time(update_time) {
        this.update_time = update_time;
    }

    getUpdate_time() {
        return this.update_time;
    }

    setIsdefault(isdefault) {
        this.isdefault = isdefault;
    }

    getIsdefault() {
        return this.isdefault;
    }
}

module.exports = {t_mall_user_addr}