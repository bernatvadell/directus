import { defineInterface } from '@/interfaces/define';
import InterfaceDivider from './divider.vue';

export default defineInterface(({ i18n }) => ({
	id: 'divider',
	name: i18n.t('interfaces.divider.divider'),
	description: i18n.t('interfaces.divider.description'),
	icon: 'remove',
	component: InterfaceDivider,
	hideLabel: true,
	hideLoader: true,
	types: ['alias'],
	recommendedDisplays: ['raw'],
	options: [
		{
			field: 'color',
			name: i18n.t('color'),
			type: 'string',
			meta: {
				width: 'half',
				interface: 'color',
			},
		},
		{
			field: 'icon',
			name: i18n.t('icon'),
			type: 'string',
			meta: {
				width: 'half',
				interface: 'icon',
			},
		},
		{
			field: 'title',
			name: i18n.t('title'),
			type: 'string',
			meta: {
				width: 'half',
				interface: 'text-input',
				options: {
					placeholder: i18n.t('interfaces.divider.title_placeholder'),
				},
			},
		},
		{
			field: 'inlineTitle',
			name: i18n.t('interfaces.divider.inline_title'),
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'toggle',
				options: {
					label: i18n.t('interfaces.divider.inline_title_label'),
				},
			},
		},
	],
}));
