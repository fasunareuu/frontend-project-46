// import _ from 'lodash'

// export default (file1, file2) => {
// 	const keys1 = Object.keys(file1)
// 	const keys2 = Object.keys(file2)

// 	const lines = _.sortBy(_.union(keys1, keys2)).map(key => {
// 		let line

// 		if (_.includes(keys1, key) && _.includes(keys2, key)) {
// 			if (_.isEqual(file1[key], file2[key])) {
// 				line = `  ${key}: ${file1[key]}`
// 			} else {
// 				line = `- ${key}: ${file1[key]} \n  + ${key}: ${file2[key]}`
// 			}
// 		}

// 		if (_.includes(keys1, key) && !_.includes(keys2, key)) {
// 			line = `- ${key}: ${file1[key]}`
// 		}
// 		if (!_.includes(keys1, key) && _.includes(keys2, key)) {
// 			line = `+ ${key}: ${file2[key]}`
// 		}
// 		return line
// 	})

// 	return `${['{', ...lines].join('\n  ')}\n}`
// }

import _ from 'lodash';

const getDifference = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const unionKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(unionKeys);

  const result = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: getDifference(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, type: 'changed', value1: data1[key], value2: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data2[key] };
  });
  return result;
};

export default getDifference;
 