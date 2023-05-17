import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default function useArticles(){
    const article = ref([]);
    const articles = ref([]);
    const errors = ref('')
    const router = useRouter();

    const getArticles = async () => {
        let response = await axios.get('http://localhost:8000/api/articles');
        articles.value = response.data.data
    }

    const getArticle = async (slug) => {
        let response = await axios.get(`http://localhost:8000/api/article/${slug}`)
        article.value = response.data.data
    }

    const storeArticle = async (data) => {
        try {
            await axios.post('http://localhost:8000/api/article', data)
            await router.push({ name: 'home' })
        } catch (e) {
            console.log(e);
        }
    }

    const updateArticle = async (slug) => {
        errors.value = ''
        try {
            await axios.put(`http://localhost:8000/api/article/${slug}`, article.value)
            await router.push({ name: 'home' })
        } catch (e) {
            console.log(e);
        }
    }

    const destroyArticle = async (slug) => {
        await axios.delete(`http://localhost:8000/api/article/${slug}`)
        await router.push({ name: 'home' })
    }

    const uploadImage = async () => {
        const data = new FormData();
        data.append('image', this.image);
    }

    return {
        errors,
        article,
        articles,
        getArticle,
        getArticles,
        storeArticle,
        updateArticle,
        destroyArticle,
    }
}