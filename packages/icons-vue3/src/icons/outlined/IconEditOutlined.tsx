// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EditOutlinedSvg from 'icon-base/es/asn/EditOutlined';

export interface EditOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEditOutlined: EditOutlinedIconType = (props, context) => <Icon name='EditOutlined' {...{ ...props, ...context.attrs }} icon={EditOutlinedSvg} />;

IconEditOutlined.displayName = 'IconEditOutlined';

export default IconEditOutlined;
