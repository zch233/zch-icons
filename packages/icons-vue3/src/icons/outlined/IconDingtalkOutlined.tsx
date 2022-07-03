// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DingtalkOutlinedSvg from 'icons-base/es/asn/DingtalkOutlined';

export interface DingtalkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDingtalkOutlined: DingtalkOutlinedIconType = (props, context) => (
    <Icon name='DingtalkOutlined' {...{ ...props, ...context.attrs }} icon={DingtalkOutlinedSvg} />
);

IconDingtalkOutlined.displayName = 'IconDingtalkOutlined';
IconDingtalkOutlined.theme = 'outlined';
IconDingtalkOutlined.originName = 'dingtalk';

export default IconDingtalkOutlined;
