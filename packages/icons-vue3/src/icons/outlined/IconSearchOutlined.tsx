// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SearchOutlinedSvg from 'icons-base/es/asn/SearchOutlined';

export interface SearchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSearchOutlined: SearchOutlinedIconType = (props, context) => (
    <Icon name='SearchOutlined' {...{ ...props, ...context.attrs }} icon={SearchOutlinedSvg} />
);

IconSearchOutlined.displayName = 'IconSearchOutlined';
IconSearchOutlined.theme = 'outlined';
IconSearchOutlined.originName = 'search';

export default IconSearchOutlined;
