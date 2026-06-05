import axios from "axios";

const URL = "http://localhost:3000"

//posts
export async function getPosts(){
    const token = sessionStorage.getItem("token");
    
    // 1. Criamos um objeto de configuração padrão para a requisição
    const config = {};

    // 2. SÓ adicionamos os headers se o token existir de verdade
    if (token && token !== "undefined" && token !== "null") {
        config.headers = {
            Authorization: `Bearer ${token}`
        };
    }

    // 3. Passamos o objeto config na requisição (ele pode ir vazio {} ou com o header)
    const response = await axios.get(`${URL}/posts`, config);

    if (response.status === 200){
        return response.data;
    } else {
        return; // Dica: Seria legal tratar ou lançar um erro aqui no futuro
    }
}

// CORRIGIDO: Agora envia o token no cabeçalho!
export async function getPost(id){
    const token = sessionStorage.getItem("token")

    const response = await axios.get(`${URL}/posts/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (response.status === 200){
        return response.data
    } else {
        return
    }
}

// CORRIGIDO: O Admin vai precisar do token para criar posts
export async function createPost(post){
    const token = sessionStorage.getItem("token")
    const response = await axios.post(`${URL}/posts`, post, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response
}

// CORRIGIDO: O Admin vai precisar do token para atualizar posts
export async function updatePost(id, post){
    const token = sessionStorage.getItem("token")
    const response = await axios.put(`${URL}/posts/${id}`, post, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response
}

// CORRIGIDO: O Admin vai precisar do token para deletar posts
export async function deletePost(id){
    const token = sessionStorage.getItem("token")
    const response = await axios.delete(`${URL}/posts/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response
}

//users
export async function getUser(id){
    const response = await axios.get(`${URL}/users/${id}`)

    if (response.status === 200){
        return response.data
    }else{
        return
    }
}

export async function createUser(user){
    const response = await axios.post(`${URL}/users`, user)
    return response
}

export async function updateUser(id, user){
    const response = await axios.put(`${URL}/users/${id}`, user)
    return response
}

export async function verifyUser(user){
    const response = await axios.post(`${URL}/users/login`, user)
    if (response.data.success){
        return {
      token: response.data.token,
      role: response.data.role // Garanta que seu backend envie o 'role' junto com o success e o token!
    }
    } else {
        return
        
    }
}