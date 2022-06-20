// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GroupOutlinedSvg from 'icon-base/es/asn/GroupOutlined';

export interface GroupOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGroupOutlined: GroupOutlinedIconType = (props, context) => <Icon name='GroupOutlined' {...{ ...props, ...context.attrs }} icon={GroupOutlinedSvg} />;

IconGroupOutlined.displayName = 'IconGroupOutlined';

export default IconGroupOutlined;
