// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsergroupDeleteOutlinedSvg from 'gupo-icons-base/es/asn/UsergroupDeleteOutlined';

export interface UsergroupDeleteOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUsergroupDeleteOutlined: UsergroupDeleteOutlinedIconType = (props, context) => (
    <Icon name='UsergroupDeleteOutlined' {...{ ...props, ...context.attrs }} icon={UsergroupDeleteOutlinedSvg} />
);

IconUsergroupDeleteOutlined.displayName = 'IconUsergroupDeleteOutlined';
IconUsergroupDeleteOutlined.theme = 'outlined';
IconUsergroupDeleteOutlined.originName = 'usergroup-delete';

export default IconUsergroupDeleteOutlined;
