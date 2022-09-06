const getPosts = (req, res) => {
    res.status(200).send("Get all Posts")
};
const getPost = (req, res) => {
    res.status(200).send("Get Post")
};
const createPost = (req, res) => {
    res.status(201).send(`Post with ID ${req.params.postId} has been created`)
};
const updatePost = (req, res) => {
    res.status(200).send(`Post with ID ${req.params.postId} has been updated`)
};
const deletePost = (req, res) => {
    res.status(200).send(`Post with ID ${req.params.postId} has been deleted`)
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};