// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EditTwotoneSvg from 'gupo-icons-base/es/asn/EditTwotone';

export interface EditTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEditTwotone: EditTwotoneIconType = (props, context) => <Icon name='EditTwotone' {...{ ...props, ...context.attrs }} icon={EditTwotoneSvg} />;

IconEditTwotone.displayName = 'IconEditTwotone';
IconEditTwotone.theme = 'twotone';
IconEditTwotone.originName = 'edit';

export default IconEditTwotone;
