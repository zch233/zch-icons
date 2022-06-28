// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsergroupAddOutlinedSvg from 'gupo-icons-base/es/asn/UsergroupAddOutlined';

export interface UsergroupAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUsergroupAddOutlined: UsergroupAddOutlinedIconType = (props, context) => (
    <Icon name='UsergroupAddOutlined' {...{ ...props, ...context.attrs }} icon={UsergroupAddOutlinedSvg} />
);

IconUsergroupAddOutlined.displayName = 'IconUsergroupAddOutlined';
IconUsergroupAddOutlined.theme = 'outlined';
IconUsergroupAddOutlined.originName = 'usergroup-add';

export default IconUsergroupAddOutlined;
