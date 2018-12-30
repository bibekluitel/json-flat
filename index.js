
module.exports = flatten


function flatten (target,  children, opts) {
    opts = opts || {}
  
    var delimiter = opts.delimiter || '.'
    var maxDepth = opts.maxDepth 
    var output = {}
 
    function step (object, prev) {
 
      var type = Object.prototype.toString.call(object)
      var isArray = Array.isArray(object)

      var isObject = (
        type === '[object Object]' ||
        type === '[object Array]'
      )

      if (isObject && !isArray) {

        let newKey = prev ? prev: delimiter;
        output[newKey] = { ...object };

        step(object[children], newKey+ delimiter+children );
        delete output[newKey][[children]];
      }

      if( isObject && isArray ){

        Object.keys(object).forEach(function (key) {

          let newKey = prev ? `${prev}${delimiter}${key}` : key
          step(object[key], newKey )
        });
      }
    }

    step(target)
    return output
  }
