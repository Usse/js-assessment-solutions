if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      var result = 0;
      for(var i = 0; i < arr.length; i++) {
        result += arr[i];
      }
      return result;
    },

    remove : function(arr, item) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] !== item) {
          ret.push(arr[i]);
        }
      }
      return ret;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if(arr[i] === item) {
          arr.splice(i,1);
          i = i - 1;
          len = len - 1;
        }
      }
      return arr;

    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
    },

    count : function(arr, item) {
      var cnt = 0;
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          cnt += 1;
        }
      }
      return cnt;
    },

    duplicates : function(arr) {
      var dupl = [];
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
          if(arr[i] === arr[j] && i!==j && dupl.indexOf(arr[i]) === -1) {
            dupl.push(arr[i]);
          }
        }
      }
      return dupl;
    },

    square : function(arr) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
        ret[i] = arr[i]*arr[i];
      }
      return ret;
    },

    findAllOccurrences : function(arr, target) {
      var occurrences = [];
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
          occurrences.push(i);
        }
      }
      return occurrences;
    }
  };
});
