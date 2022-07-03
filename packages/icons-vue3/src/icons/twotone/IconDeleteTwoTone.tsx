// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteTwotoneSvg from 'icons-base/es/asn/DeleteTwotone';

export interface DeleteTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDeleteTwotone: DeleteTwotoneIconType = (props, context) => <Icon name='DeleteTwotone' {...{ ...props, ...context.attrs }} icon={DeleteTwotoneSvg} />;

IconDeleteTwotone.displayName = 'IconDeleteTwotone';
IconDeleteTwotone.theme = 'twotone';
IconDeleteTwotone.originName = 'delete';

export default IconDeleteTwotone;
