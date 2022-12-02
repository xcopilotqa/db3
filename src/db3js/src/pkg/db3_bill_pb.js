// source: db3_bill.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

import * as jspb from "google-protobuf";
import db3_base_pb from "./db3_base_pb.js";

var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.object.extend(proto, db3_base_pb);
goog.exportSymbol('proto.db3_bill_proto.Bill', null, global);
goog.exportSymbol('proto.db3_bill_proto.BillQueryRequest', null, global);
goog.exportSymbol('proto.db3_bill_proto.BillType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.db3_bill_proto.Bill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.db3_bill_proto.Bill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.db3_bill_proto.Bill.displayName = 'proto.db3_bill_proto.Bill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.db3_bill_proto.BillQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.db3_bill_proto.BillQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.db3_bill_proto.BillQueryRequest.displayName = 'proto.db3_bill_proto.BillQueryRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.db3_bill_proto.Bill.prototype.toObject = function(opt_includeInstance) {
  return proto.db3_bill_proto.Bill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.db3_bill_proto.Bill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.db3_bill_proto.Bill.toObject = function(includeInstance, msg) {
  var f, obj = {
    gasFee: (f = msg.getGasFee()) && db3_base_pb.Units.toObject(includeInstance, f),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    billId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    billType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    time: jspb.Message.getFieldWithDefault(msg, 5, 0),
    billTargetId: msg.getBillTargetId_asB64(),
    owner: msg.getOwner_asB64(),
    queryAddr: msg.getQueryAddr_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.db3_bill_proto.Bill}
 */
proto.db3_bill_proto.Bill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.db3_bill_proto.Bill;
  return proto.db3_bill_proto.Bill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.db3_bill_proto.Bill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.db3_bill_proto.Bill}
 */
proto.db3_bill_proto.Bill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new db3_base_pb.Units;
      reader.readMessage(value,db3_base_pb.Units.deserializeBinaryFromReader);
      msg.setGasFee(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBillId(value);
      break;
    case 4:
      var value = /** @type {!proto.db3_bill_proto.BillType} */ (reader.readEnum());
      msg.setBillType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBillTargetId(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwner(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setQueryAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.db3_bill_proto.Bill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.db3_bill_proto.Bill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.db3_bill_proto.Bill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.db3_bill_proto.Bill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGasFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      db3_base_pb.Units.serializeBinaryToWriter
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBillId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBillType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBillTargetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getOwner_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getQueryAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional db3_base_proto.Units gas_fee = 1;
 * @return {?proto.db3_base_proto.Units}
 */
proto.db3_bill_proto.Bill.prototype.getGasFee = function() {
  return /** @type{?proto.db3_base_proto.Units} */ (
    jspb.Message.getWrapperField(this, db3_base_pb.Units, 1));
};


/**
 * @param {?proto.db3_base_proto.Units|undefined} value
 * @return {!proto.db3_bill_proto.Bill} returns this
*/
proto.db3_bill_proto.Bill.prototype.setGasFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.clearGasFee = function() {
  return this.setGasFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.db3_bill_proto.Bill.prototype.hasGasFee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 block_height = 2;
 * @return {number}
 */
proto.db3_bill_proto.Bill.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 bill_id = 3;
 * @return {number}
 */
proto.db3_bill_proto.Bill.prototype.getBillId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setBillId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional BillType bill_type = 4;
 * @return {!proto.db3_bill_proto.BillType}
 */
proto.db3_bill_proto.Bill.prototype.getBillType = function() {
  return /** @type {!proto.db3_bill_proto.BillType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.db3_bill_proto.BillType} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setBillType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 time = 5;
 * @return {number}
 */
proto.db3_bill_proto.Bill.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes bill_target_id = 6;
 * @return {string}
 */
proto.db3_bill_proto.Bill.prototype.getBillTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes bill_target_id = 6;
 * This is a type-conversion wrapper around `getBillTargetId()`
 * @return {string}
 */
proto.db3_bill_proto.Bill.prototype.getBillTargetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBillTargetId()));
};


/**
 * optional bytes bill_target_id = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBillTargetId()`
 * @return {!Uint8Array}
 */
proto.db3_bill_proto.Bill.prototype.getBillTargetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBillTargetId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setBillTargetId = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes owner = 8;
 * @return {string}
 */
proto.db3_bill_proto.Bill.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes owner = 8;
 * This is a type-conversion wrapper around `getOwner()`
 * @return {string}
 */
proto.db3_bill_proto.Bill.prototype.getOwner_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwner()));
};


/**
 * optional bytes owner = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwner()`
 * @return {!Uint8Array}
 */
proto.db3_bill_proto.Bill.prototype.getOwner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setOwner = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional bytes query_addr = 9;
 * @return {string}
 */
proto.db3_bill_proto.Bill.prototype.getQueryAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes query_addr = 9;
 * This is a type-conversion wrapper around `getQueryAddr()`
 * @return {string}
 */
proto.db3_bill_proto.Bill.prototype.getQueryAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getQueryAddr()));
};


/**
 * optional bytes query_addr = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getQueryAddr()`
 * @return {!Uint8Array}
 */
proto.db3_bill_proto.Bill.prototype.getQueryAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getQueryAddr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.db3_bill_proto.Bill} returns this
 */
proto.db3_bill_proto.Bill.prototype.setQueryAddr = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.db3_bill_proto.BillQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.db3_bill_proto.BillQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.db3_bill_proto.BillQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.db3_bill_proto.BillQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.db3_bill_proto.BillQueryRequest}
 */
proto.db3_bill_proto.BillQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.db3_bill_proto.BillQueryRequest;
  return proto.db3_bill_proto.BillQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.db3_bill_proto.BillQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.db3_bill_proto.BillQueryRequest}
 */
proto.db3_bill_proto.BillQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.db3_bill_proto.BillQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.db3_bill_proto.BillQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.db3_bill_proto.BillQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.db3_bill_proto.BillQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStartId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getEndId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.db3_bill_proto.BillQueryRequest.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.db3_bill_proto.BillQueryRequest} returns this
 */
proto.db3_bill_proto.BillQueryRequest.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 start_id = 2;
 * @return {number}
 */
proto.db3_bill_proto.BillQueryRequest.prototype.getStartId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.db3_bill_proto.BillQueryRequest} returns this
 */
proto.db3_bill_proto.BillQueryRequest.prototype.setStartId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 end_id = 3;
 * @return {number}
 */
proto.db3_bill_proto.BillQueryRequest.prototype.getEndId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.db3_bill_proto.BillQueryRequest} returns this
 */
proto.db3_bill_proto.BillQueryRequest.prototype.setEndId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.db3_bill_proto.BillType = {
  BILLFORMUTATION: 0,
  BILLFORQUERY: 1
};
export default proto.db3_bill_proto;
