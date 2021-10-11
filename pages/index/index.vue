<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script lang="ts">
	import {
		addOrgMember
	} from '@/service/test';
	import {
		useStore
	} from "vuex";
	import {
		defineComponent,
		computed
	} from 'vue';
	export default defineComponent({
		setup() {
			// 调用函数 获得Store
			const store = useStore();
			console.log(store.state.storage.id)
			return {
				// gives access to the whole store
				title: 'vate',

				// gives access only to specific state
				state: computed(() => store.counter),
				// gives access to specific getter; like `computed` properties
				doubleCount: computed(() => store.doubleCount),
			};
		},
	});
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
