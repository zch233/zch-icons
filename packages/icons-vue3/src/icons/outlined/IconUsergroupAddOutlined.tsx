// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsergroupAddOutlinedSvg from 'icon-base/es/asn/UsergroupAddOutlined';

export interface UsergroupAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUsergroupAddOutlined: UsergroupAddOutlinedIconType = (props, context) => (
    <Icon name='UsergroupAddOutlined' {...{ ...props, ...context.attrs }} icon={UsergroupAddOutlinedSvg} />
);

IconUsergroupAddOutlined.displayName = 'IconUsergroupAddOutlined';

export default IconUsergroupAddOutlined;
