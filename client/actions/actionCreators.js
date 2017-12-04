

//Increment
export function Increment(index){
	return {
		type:"INCREMENT_LIKES",
		index

	}
}
// Add Comment 
export function add(postId,author,comment){
	type:"ADD_COMMENT",
	postId,
	author,
	comment
}
//Remove Comment
export function remove(postId,i){
	type:"REMOVE_COMMENT",
	postId,
	i
}
