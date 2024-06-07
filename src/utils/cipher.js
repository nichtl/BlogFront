import { decrypt as aesDecrypt, encrypt as aesEncrypt } from 'crypto-js/aes';
import UTF8, { parse } from 'crypto-js/enc-utf8';
import pkcs7 from 'crypto-js/pad-pkcs7';
import CTR from 'crypto-js/mode-ctr';
import Base64 from 'crypto-js/enc-base64';
import MD5 from 'crypto-js/md5';
import SHA256 from 'crypto-js/sha256';
import SHA512 from 'crypto-js/sha512';

export function AesEncryption({ key, iv }) {
  this.key = parse(key);
  this.iv = parse(iv);

  this.getOptions = function() {
    return {
      mode: CTR,
      padding: pkcs7,
      iv: this.iv,
    };
  };

  this.encrypt = function(plainText) {
    return aesEncrypt(plainText, this.key, this.getOptions()).toString();
  };

  this.decrypt = function(cipherText) {
    return aesDecrypt(cipherText, this.key, this.getOptions()).toString(UTF8);
  };
}

function Base64Encryption() {
  this.encrypt = function(plainText) {
    return UTF8.parse(plainText).toString(Base64);
  };

  this.decrypt = function(cipherText) {
    return Base64.parse(cipherText).toString(UTF8);
  };
}

function MD5Hashing() {
  this.hash = function(plainText) {
    return MD5(plainText).toString();
  };
}

function SHA256Hashing() {
  this.hash = function(plainText) {
    return SHA256(plainText).toString();
  };
}

function SHA512Hashing() {
  this.hash = function(plainText) {
    return SHA512(plainText).toString();
  };
}

export  function EncryptionFactory() {
  this.createAesEncryption = function(params) {
    return new AesEncryption(params);
  };

  this.createBase64Encryption = function() {
    return new Base64Encryption();
  };
}

export function HashingFactory() {
  this.createMD5Hashing = function() {
    return new MD5Hashing();
  };

  this.createSHA256Hashing = function() {
    return new SHA256Hashing();
  };

  this.createSHA512Hashing = function() {
    return new SHA512Hashing();
  };
}

