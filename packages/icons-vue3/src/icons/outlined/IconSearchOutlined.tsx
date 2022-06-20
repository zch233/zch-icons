// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SearchOutlinedSvg from 'icon-base/es/asn/SearchOutlined';

export interface SearchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSearchOutlined: SearchOutlinedIconType = (props, context) => (
    <Icon name='SearchOutlined' {...{ ...props, ...context.attrs }} icon={SearchOutlinedSvg} />
);

IconSearchOutlined.displayName = 'IconSearchOutlined';

export default IconSearchOutlined;
