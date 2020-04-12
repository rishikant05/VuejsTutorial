<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quoute Added</h3>
            <div class="progess">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: (quoteCount/maxQuoutes) * 100 + '%'}" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        {{quoteCount}} / {{maxQuoutes}}
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['quoteCount', 'maxQuoutes']
}
</script>

<style>

</style>