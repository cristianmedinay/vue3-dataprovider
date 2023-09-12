import {defineComponent, ref,useSlots} from 'vue'

export default defineComponent({
        props:['url'],
        setup(props){
            const slots = useSlots();
            const data = ref(null);
            const loading = ref(true);
            const error = ref(null);
            fetch(props.url).then(res=>res.json())
            .then(json=>{
                data.value=json;
            })
            .catch(e=> error.value=e)
            .finally(()=>loading.value = false)

            return ()=>slots.default({
                data:data.value,
                loading:loading.value,
                error:error.value
            })
        }
})