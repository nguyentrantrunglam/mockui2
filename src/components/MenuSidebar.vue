<template>
    <div>
        <div class="category">
            <div class="category-item">
                <img class="category-item-img" src="../assets/siren-on.png" />
                <div class="category-item-text">
                    <p class="category-item-title">News</p>
                    <p class="category-item-number">12</p>
                </div>
            </div>
            <div class="category-item active">
                <img class="category-item-img" src="../assets/chalkboard.png" />
                <div class="category-item-text">
                    <p class="category-item-title">Technology</p>
                    <p class="category-item-number">12</p>
                </div>
            </div>
            <div class="category-item">
                <div class="category-item-img">
                    <img src="../assets/play.png" />
                </div>
                <div class="category-item-text">
                    <p class="category-item-title">Music</p>
                    <p style="display: none" class="category-item-number"></p>
                </div>
            </div>
            <div class="category-item">
                <img class="category-item-img" src="../assets/comment-alt1.png" />
                <div class="category-item-text">
                    <p class="category-item-title">Feedback</p>
                    <p class="category-item-number">99+</p>
                </div>
            </div>
        </div>
        <div class="category">
            <div class="category-item">
                <img class="category-item-img" src="../assets/clipboard-check.png" />
                <div class="category-item-text">
                    <p class="category-item-title">Survey</p>
                    <p class="category-item-number">12</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.category {
    border-bottom: 1px solid #F0F0F0;
    padding: 16px;
}

.category-item {
    display: flex;
    border-radius: 20px;
    cursor: pointer;
    width: 228px;
    margin-bottom: 4px;
}

.category-item:hover {
    background: #e0efef;
    color: #148686
}

.active {
    background: #007C7C;
    color: white;
}

.category-item-img {
    width: 20px;
    height: 16px;
    margin: 12px 14px 12px 18px;
}

.category-item-text {
    width: 70%;
    display: flex;
    justify-content: space-between;
}

.category-item-title {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 8px;
    margin-right: 8px;

}

.category-item-text-active {
    width: 70%;
    display: flex;
    justify-content: space-between;
}

.category-item-title- {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 12px;
    margin-right: 12px;

}

.category-item-number {
    height: 18px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    margin-top: 11px;
    background: #E72511;
    color: white;
    padding: 0px 6px 0px 6px;
    border-radius: 40px;
}
</style>